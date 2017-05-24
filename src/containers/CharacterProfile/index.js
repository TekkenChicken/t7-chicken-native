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
import ProfileBackDrop from '../../components/CharacterProfile/ProfileBackDrop';
import ProfilePicture from '../../components/CharacterProfile/ProfilePicture';
import ProfileName from '../../components/CharacterProfile/ProfileName';
import ProfileHeader from '../../components/CharacterProfile/ProfileHeader';
import CommandListBanner from '../../components/CharacterProfile/CommandListBanner';
import MoveList from './MoveList';
import FilterMenuContainer from './FilterMenuContainer';
import Drawer from 'react-native-drawer';
import CustomText from '../../components/CustomText/CustomText';
import { charProfileNavHeader } from '../../components/NavigationBar';

//images
import headshots from '../../img/headshots/index';

// Styles
import Styles from './styles';

// dispatch actions
import { fetchDataForCharacter, applyCharacterMoveFilters, resetDataForCharacter } from '../../redux/actions/character';

class CharacterProfileScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const prelimConfig = charProfileNavHeader(navigation.state.params.characterID,[{key: "BackButton"}], [,{key: "FilterButton"}]);
    const headerConfig = navigation.state.params.header || prelimConfig;
    return headerConfig;
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollHeader: false
    }
  }

  componentWillMount() {
    this.updateHeaderParams();
    // Fetch Data on character using character ID sent as props on navigate
    setTimeout(() => this.props.fetchDataForCharacter(this.props.characterID), 400);
  }

  componentWillUnmount() {
    this.props.resetDataForCharacter();
  }

  /**
   *  Header Config Methods
   */

  // imperatively set the configuration params for header (so that the header is connected to component)
  updateHeaderParams() {
    const headerConfig = {
      header: charProfileNavHeader(this.props.characterID, this.getHeaderLeftConfig(), this.getHeaderRightConfig())
    };
    this.props.navigation.setParams(headerConfig);
  }

  getHeaderLeftConfig() {
    return [
      { key: "BackButton", navigation: this.props.navigation }
    ];
  }

  getHeaderRightConfig() {
    return [
      { key: "FilterButton", onToggleFilter: () => this.toggleDrawer() }
    ];
  }

  toggleDrawer() {
    return (this.refs._drawer._open) ? this.refs._drawer.close() : this.refs._drawer.open();
  }

  handleScroll(e) {
    console.log(e.nativeEvent.contentOffset.y, this.state.scrollHeader);
    if (e.nativeEvent.contentOffset.y >= 80 && !this.state.scrollHeader) {
      this.setState({ scrollHeader: true });
    } else if (e.nativeEvent.contentOffset.y < 80 && this.state.scrollHeader) {
      this.setState({ scrollHeader: false });
    }
  }

  render() {
    let {characterID, characterMoves, characterName} = this.props;
    const menu = <FilterMenuContainer />;
    console.log()
    return (
      <Drawer
        ref="_drawer"
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
          <ProfileHeader
            containerStyle={Styles.header}
            scroll={this.state.scrollHeader}
            name={characterID.toUpperCase()} />
          <ScrollView
            style={Styles.scrollContainer}
            scrollEventThrottle={20}
            onScroll={(e) => this.handleScroll(e)}
            keyboardShouldPersistTaps={'always'}>
              <ProfileBackDrop image={null} />
              <ProfilePicture image={headshots[this.props.characterID]} />
              <ProfileName name={characterID.toUpperCase()} />
              <MoveList moves={characterMoves} />
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}

/** MAPPING STATE **/
const mapStateToProps = (state, props) => {
  console.log(state, props);
  return {
    characterID: props.navigation.state.params.characterID,
    characterMoves: state.character.moves
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
