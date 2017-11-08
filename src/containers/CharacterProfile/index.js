import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router } from '../Router';
import { isPortrait } from '../../util/orientations';

// dependencies
import {
  View,
  Text,
  ListView,
  ScrollView,
  Button,
  TextInput,
  Platform,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const redPrimary = '#9d1918';
const redSecondary = '#320f1c';

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
import FrameDataRow from '../../components/Spreadsheet/FrameDataRow';

//images
import headshots from '../../img/headshots/index';

// Styles
import Styles from './styles';
import cellStyles from '../../components/Spreadsheet/cellStyles';
import { propOrder, propColors } from '../../components/Spreadsheet/config';

// dispatch actions
import { fetchDataForCharacter, applyCharacterMoveFilters, resetDataForCharacter, searchMovesByNotation } from '../../redux/actions/character';

class CharacterProfileScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const prelimConfig = charProfileNavHeader(navigation.state.params.characterID,[{key: "BackButton"}], [,{key: "FilterButton"}]);
    const title = navigation.state.params.characterID;
    const left = [{key: "BackButton", navigation: navigation}];
    const right = navigation.state.params.right || [{key: "FilterButton"}];
    return charProfileNavHeader(title, left, right);
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollHeader: false,
      searchFocus: false,
      orientation: isPortrait() ? 'portrait' : 'landscape',
    };

    Dimensions.addEventListener('change', (e) => {
      this.setState({
          orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });
  }

  componentWillMount() {
    this.updateHeaderParams();
    // Fetch Data on character using character ID sent as props on navigate
    setTimeout(() => this.props.fetchDataForCharacter(this.props.characterID), 500);
  }

  componentDidMount() {
    // get position of searchbar for scrolling
    setTimeout(() => {
      this.refs.search.measure((frameOffsetX, frameOffsetY, w, h, pageX, pageY) => {
        this.setState({searchPos : pageY});
      });
    }, 10);
  }

  componentWillUnmount() {
    this.props.resetDataForCharacter();
  }

  /* =============================
   *  Header Config Methods
   ============================= */

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

  /* =============================
   *  View Methods
   ============================= */

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

  /**
   *  @method: onSearchFocusHandler
   *  On focus of serachbar, will scroll down to searchbar if not already stuck to top
   */
  onSearchFocusHandler() {
    this.refs.search.measure((frameOffsetX, frameOffsetY, w, h, pageX, pageY) => {
      let offset = (Platform.OS === 'ios') ? 64 : 54;
      if (pageY > offset) {
        setTimeout(() => this.refs.scrollView.scrollTo({x: 0, y: this.state.searchPos - h/1.25}), 1);
      }
      this.setState({searchFocus: true});
    })
  }

  onSearchBlurHandler() {
    this.setState({searchFocus: false});
  }
  renderTableHeader() {
    return (
      <FrameDataRow navigation={this.props.navigation} header={true} />
    )
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
        <LinearGradient
          colors={[redSecondary, redPrimary]}
          start={{x: 1.0, y: 0.9}} end={{x: 0.5, y: 0.1}}
          style={Styles.mainContainer}
          >
          <ProfileHeader
            containerStyle={Styles.header}
            scroll={this.state.scrollHeader}
            name={characterID.toUpperCase()} />
          <ScrollView
            ref={"scrollView"}
            style={Styles.scrollContainer}
            scrollEventThrottle={12}
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
                containerStyle={{backgroundColor: redSecondary}}
                inputWrapStyle={{backgroundColor: '#3d1d2b' }}
                onChange={this.props.triggerSearchByNotation}
                onFocusCallback={() => this.onSearchFocusHandler()}
                onBlurCallback={() => this.onSearchBlurHandler()}
              />
              <Text style={Styles.rbnorway}>Frame data provided by rbnorway.org</Text>
              {this.state.orientation == 'landscape' ? this.renderTableHeader() : null}
            </View>
            <View style={(this.state.searchFocus) ? Styles.staticListHeight : ''}>
              <MoveList
                navigation={this.props.navigation}
                orientation={this.state.orientation}
                moves={characterMovesData}
              />
            </View>
          </ScrollView>
        </LinearGradient>
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
