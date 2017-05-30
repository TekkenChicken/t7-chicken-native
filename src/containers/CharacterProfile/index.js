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
  TextInput,
  Platform
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
import SearchBar from '../../components/SearchBar/SearchBar';
import { charProfileNavHeader } from '../../components/NavigationBar';

//images
import headshots from '../../img/headshots/index';

// Styles
import Styles from './styles';

// dispatch actions
import { fetchDataForCharacter, applyCharacterMoveFilters, resetDataForCharacter, searchMovesByNotation } from '../../redux/actions/character';

class CharacterProfileScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const prelimConfig = charProfileNavHeader(navigation.state.params.characterID,[{key: "BackButton"}], [,{key: "FilterButton"}], navigation.state.params.scrollHeader);
    const title = navigation.state.params.characterID;
    const left = [{key: "BackButton", navigation: navigation}];
    const right = navigation.state.params.right || [{key: "FilterButton"}];
    return charProfileNavHeader(title, left, right, navigation.state.params.scrollHeader);
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollHeader: false,
      searchFocus: false
    };
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
      charName: this.props.characterID,
      right: this.getHeaderRightConfig(),
      scrollHeader: this.props.navigation.state.params.scrollHeader
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
    this.toggleScrollHeader(e.nativeEvent);
    //this.toggleSearchScrollOffset(e.nativeEvent);
  }

  toggleScrollHeader(e) {
    this.setState({scrollHeader: e.contentOffset.y >= 50});
  }

  onSearchFocusHandler() {
    this.refs.search.measure((frameOffsetX, frameOffsetY) => {
      let offset = (Platform.OS === 'ios') ? 64 : 54;
      this.refs.scrollView.scrollTo({y: frameOffsetY});
      this.setState({searchFocus: true});
    })
  }

  onSearchBlurHandler() {
    this.setState({searchFocus: false});
  }

  render() {
    let {characterID, characterMovesData, characterName} = this.props;
    // const scrollStateOffset = (this.props.navigation.state.params.scrollHeader) ? Styles.offsetOnScroll : '';
    const menu = <FilterMenuContainer />;
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
            ref={"scrollView"}
            style={Styles.scrollContainer}
            scrollEventThrottle={16}
            onScroll={(e) => this.handleScroll(e)}
            keyboardShouldPersistTaps={'always'}
            stickyHeaderIndices={[4]}>
            <View style={Styles.offset}>
              <ProfileBackDrop image={null} />
            </View>
            <ProfilePicture image={headshots[this.props.characterID]} />
            <ProfileName name={characterName.toUpperCase()} />
            <CommandListBanner />
            <View ref={"search"}>
              <SearchBar
                onChange={this.props.triggerSearchByNotation}
                onFocusCallback={() => this.onSearchFocusHandler()}
                onBlurCallback={() => this.onSearchBlurHandler()}
              />
            </View>
            <View style={(this.state.searchFocus) ? Styles.staticListHeight : ''}>
              <MoveList
                moves={characterMovesData}
              />
            </View>
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}

/** MAPPING STATE **/
const mapStateToProps = (state, props) => {
  return {
    characterID: props.navigation.state.params.characterID,
    characterName: props.navigation.state.params.characterName,
    characterMovesData: state.character.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerFilterUpdate: () => dispatch(applyCharacterMoveFilters()),
    fetchDataForCharacter: (characterID) => dispatch(fetchDataForCharacter(characterID)),
    resetDataForCharacter: () => dispatch(resetDataForCharacter()),
    triggerSearchByNotation: (notation) => dispatch(searchMovesByNotation(notation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterProfileScreen);
