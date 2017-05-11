import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router } from '../Router';

// dependencies
import {
  View,
  Text,
  ListView,
  ScrollView,
  Button,
  TextInput
} from 'react-native';

// components
import ProfileBanner from '../../components/CharacterProfile/ProfileBanner';
import ProfilePicture from '../../components/CharacterProfile/ProfilePicture';
import ProfileName from '../../components/CharacterProfile/ProfileName';
import CommandListBanner from '../../components/CharacterProfile/CommandListBanner';
import MoveList from './MoveList';
import FilterMenuContainer from './FilterMenuContainer';
import Drawer from 'react-native-drawer';

//images
import headshots from '../../img/headshots/index';

// Styles
import Styles from './styles';

// dispatch actions
import { fetchDataForCharacter, applyCharacterMoveFilters, resetDataForCharacter } from '../../redux/actions/character';

class CharacterProfileScreen extends Component {


  componentWillMount() {
    // Fetch Data on character using character ID sent as props on navigate
    setTimeout(() => this.props.fetchDataForCharacter(this.props.characterID), 400);
  }

  componentWillUnmount() {
    this.props.resetDataForCharacter();
  }

  render() {
    let {characterID, characterMoves, characterName} = this.props;
    const menu = <FilterMenuContainer />;

    return (
      <Drawer
        content={menu}
        type="overlay"
        side="right"
        tapToClose={true}
        acceptPan={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        panOpenMask={0.3}
        closedDrawerOffset={-3}
        styles={{ mainOverlay: {backgroundColor: '#000', opacity: 0} }}
        tweenDuration={170}
        tweenHandler={(ratio) => ({
          mainOverlay: { opacity: ratio/1.5 }
        })}
        onClose={() => this.props.triggerFilterUpdate()}
      >
        <View style={Styles.mainContainer}>
          <ScrollView>
              <View style={Styles.backDrop}/>
              <ProfilePicture image='./../../img/headshots/Tile-Kazuya.png' />
              <ProfileName name={characterID.toUpperCase()} />
              <MoveList moves={characterMoves} />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}

/** MAPPING STATE **/
const mapStateToProps = (state) => {
  return {
    characterMoves: state.character.moves,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerFilterUpdate: () => dispatch(applyCharacterMoveFilters()),
    fetchDataForCharacter: (characterID) => dispatch(fetchDataForCharacter(characterID)),
    resetDataForCharacter: () => dispatch(resetDataForCharacter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterProfileScreen);
