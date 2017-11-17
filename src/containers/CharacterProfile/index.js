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
  Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
import * as Colors from '../../style/vars/colors';
import { propOrder, propColors } from '../../components/Spreadsheet/config';

// dispatch actions
import { fetchDataForCharacter, applyCharacterMoveFilters, resetDataForCharacter, searchMovesByNotation } from '../../redux/actions/character';


class CharacterProfileScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const prelimConfig = charProfileNavHeader(navigation.state.params.characterID,[{key: "BackButton"}], [,{key: "FilterButton"}]);
    const title = navigation.state.params.characterName;
    const left = [{key: "BackButton", navigation: navigation}];
    const right = navigation.state.params.right || [{key: "FilterButton"}];
    const scroll = navigation.state.params.scroll;
    return charProfileNavHeader(title, left, right, scroll);
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollHeader: false,
      searchFocus: false,
      orientation: isPortrait() ? 'portrait' : 'landscape',
    };

    this._onOrientationChange = this.onOrientationChange.bind(this);
    this._animatedValue = new Animated.Value(0);
  }

  componentWillMount() {
    this.updateHeaderParams();

    // Fetch Data on character using character ID sent as props on navigate
    setTimeout(() => this.props.fetchDataForCharacter(this.props.characterID), 800);

    // Set listener for orientation switches
    // the listener requires a named reference to its callback listener in order to remove it when done
    Dimensions.addEventListener('change', this._onOrientationChange);
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
    Dimensions.removeEventListener('change', this._onOrientationChange);
    this.props.resetDataForCharacter();
  }

  onOrientationChange() {
    this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
    });
  }

  /* =============================
   *  Header Config Methods
   ============================= */

  // imperatively set the configuration params for header (so that the header is connected to component)
  updateHeaderParams(name) {
    const headerConfig = {
      charName: name || this.props.characterID,
      right: this.getHeaderRightConfig(),
      scroll: this.props.navigation.state.params.scrollHeader
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
    // this.toggleScrollHeader(e.nativeEvent);
    //this.toggleSearchScrollOffset(e.nativeEvent);
    //Animated.event([{nativeEvent: {contentOffset: {y: this._animatedValue}}}])
    this.props.navigation.setParams({scroll: e.nativeEvent.contentOffset.y >= 48});
  }

  /**
   *  @method onSearchFocusHandler
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
        styles={drawerStyles}
        tweenDuration={170}
        tweenHandler={(ratio) => ({
          mainOverlay: { opacity: ratio/1.5 }
        })}
        onClose={() => this.props.triggerFilterUpdate()}
      >
        <LinearGradient
          colors={[Colors.redPrimary, Colors.redSecondary]}
          start={{x: 1.0, y: 0.9}} end={{x: 0.8, y: 0.1}}
          style={Styles.mainContainer}
          >
          <ScrollView
            ref={"scrollView"}
            style={Styles.scrollContainer}
            keyboardShouldPersistTaps={'always'}
            stickyHeaderIndices={[2]}>
            <View style={Styles.charHeader}>
              <ProfilePicture image={headshots[this.props.characterID]} />
              {/* <ProfileName name={characterName.toUpperCase()} /> */}
            </View>
            <CommandListBanner />
            <View style={Styles.stickySection} ref={"search"}>
              <SearchBar
                containerStyle={{backgroundColor: Colors.redSecondary}}
                inputWrapStyle={{backgroundColor: Colors.lightPurple }}
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

const drawerStyles = {
  mainOverlay: {
    backgroundColor: '#000',
    opacity: 0
  },
  drawer: {
    backgroundColor: '#000'
  }
};

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
