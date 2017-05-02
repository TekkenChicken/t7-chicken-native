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

// Utils
import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';

// components
import ProfileBanner from '../../components/CharacterProfile/ProfileBanner';
import ProfilePicture from '../../components/CharacterProfile/ProfilePicture';
import ProfileName from '../../components/CharacterProfile/ProfileName';
import CommandListBanner from '../../components/CharacterProfile/CommandListBanner';
import MoveList from './MoveList';
import FilterSideMenu from '../FilterSideMenu/FilterSideMenu';
import SideMenu from 'react-native-side-menu';

//images
import headshots from '../../img/headshots/index';

// Styles
import Styles from './styles';

// dispatch actions
import { fetchDataForCharacter, applyCharacterMoveFilters } from '../../redux/actions/character';

class CharacterProfileScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      filterQueue: {}
    };
  }

  componentDidMount() {
    // Fetch Data on character using character ID sent as props on navigate
    this.props.dispatch(fetchDataForCharacter(this.props.characterID));
  }

  updateFilter(key, value) {
    let filter = this.state.filterQueue;
    // if the value sent is not null, update filter
    if (value) {
      filter[key] = value;
    } else {
      delete filter[key];
    }
    // update filter obj in state
    this.setState({ filter });
  }

  onMenuChange(isOpen) {
    if (!isOpen) {
      // this.props.dispatch(applyCharacterMoveFilters(this.refs.filterMenu.state.filterQueue));
    }
  }

  filterAttacks(moves, filter) {
    // object to filter moves against
    // const filterObj = this.props.filter;
    // return MoveFiltersUtil.filterMoves(moves, filterObj);
    return MoveFiltersUtil.filterMoves(moves, filter);
  }

  render() {
    let {characterID, character} = this.props;
    const moves = (character) ? (character.moves) : [];
    const filter = this.props.character.filter;
    const menu = <FilterSideMenu ref="filterMenu" closeSideMenu={true} updateFilterHandler={(key, value) => this.updateFilter(key, value)} />;
    const filtered = this.filterAttacks(moves, filter);

    return (
      <SideMenu
        menu={menu}
        menuPosition={'right'}
        onChange={(isOpen) => this.onMenuChange(isOpen)}
      >
      <View style={Styles.mainContainer}>
        <ScrollView>
            <View style={Styles.backDrop}/>
            <ProfilePicture image='./../../img/headshots/Tile-Kazuya.png' />
            <ProfileName name={characterID.toUpperCase()} />
            <MoveList moves={filtered} />
        </ScrollView>
      </View>
      </SideMenu>
    );
  }
}

/** MAPPING STATE **/
const mapStateToProps = function(state) {
  let { character } = state;
  return {
    character
  }
};

export default connect(mapStateToProps)(CharacterProfileScreen);
