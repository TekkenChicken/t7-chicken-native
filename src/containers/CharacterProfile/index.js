import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router } from '../Router';
import { isEqual } from 'lodash';

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
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import Drawer from 'react-native-drawer';

//images
import headshots from '../../img/headshots/index';

// Styles
import Styles from './styles';

// dispatch actions
import { fetchDataForCharacter, applyCharacterMoveFilters, resetDataForCharacter } from '../../redux/actions/character';

class CharacterProfileScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      filterQueue: {}
    };
  }

  componentWillMount() {
    // Fetch Data on character using character ID sent as props on navigate
    setTimeout(() => this.props.fetchDataForCharacter(this.props.characterID), 300);
  }

  componentWillUnmount() {
    this.props.resetDataForCharacter();
  }

  shouldComponentUpdate(props, newState) {
    if (!isEqual(this.state.filterQueue, newState.filterQueue) || Object.keys(newState.filterQueue).length > 0) {
      return false;
    }
    return true;
  }

  /**
   *  @method: updateFilter
   *  @param: key [int], value [misc], addFlag [bool]
   *  A key (obj property) and a value associated to the key will be received and used to update the filterQueue state
   *  Each key is used to notate an array in the filterQueue. If addFlag is true, then the value will be pushed to
   *  the array associated with that key. False, remove that value from the array.
   */
  updateFilter(key, value, addFlag) {
    const filter = { ...this.state.filterQueue };
    filter[key] = filter[key] || [];

    if (addFlag) {
      filter[key].push(value);
    } else {
      const i = filter[key].indexOf(value);
      filter[key].splice(i, 1);
      // if key's array had no values, delete it
      if (filter[key].length === 0) {
        delete filter[key];
      }
    }

    this.setState({ filterQueue: filter });
  }

  /**
   *  @method: resetFilter
   *  Resets the state of filterQueue
   */
  resetFilter() {
    this.setState({ filterQueue: {} });
  }

  render() {
    let {characterID, character} = this.props;
    const menu = <FilterMenu updateFilterHandler={(key, value, addFlag) => this.updateFilter(key, value, addFlag)}/>;
    const drawerStyleObj = { mainOverlay: {backgroundColor: '#000', opacity: 0} };

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
        styles={drawerStyleObj}
        tweenDuration={170}
        tweenHandler={(ratio) => ({
          mainOverlay: { opacity: ratio/1.5 }
        })}
        onClose={() => this.props.triggerFilterUpdate(this.state.filterQueue)}
      >
        <View style={Styles.mainContainer}>
          <ScrollView>
              <View style={Styles.backDrop}/>
              <ProfilePicture image='./../../img/headshots/Tile-Kazuya.png' />
              <ProfileName name={characterID.toUpperCase()} />
              <MoveList moves={character.moves} />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}

/** MAPPING STATE **/
const mapStateToProps = (state) => {
  let character = { ...state.character };
  delete character.filter;
  return {
    character
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerFilterUpdate: (filter) => dispatch(applyCharacterMoveFilters(filter)),
    fetchDataForCharacter: (characterID) => dispatch(fetchDataForCharacter(characterID)),
    resetDataForCharacter: () => dispatch(resetDataForCharacter())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterProfileScreen);
