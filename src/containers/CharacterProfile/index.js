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

import SideMenu from 'react-native-side-menu';

// components
import ProfileBanner from '../../components/CharacterProfile/ProfileBanner';
import ProfilePicture from '../../components/CharacterProfile/ProfilePicture';
import ProfileName from '../../components/CharacterProfile/ProfileName';
import CommandListBanner from '../../components/CharacterProfile/CommandListBanner';
import MoveList from './MoveList';
import FilterSideMenu from '../FilterSideMenu/FilterSideMenu';

//images
import headshots from '../../img/headshots/index';

// Styles
import Styles from './styles';

// dispatch actions
import { fetchDataForCharacter } from '../../redux/actions/character';

class CharacterProfileScreen extends Component {

  componentDidMount() {
    // Fetch Data on character using character ID sent as props on navigate
    this.props.dispatch(fetchDataForCharacter(this.props.characterID));
  }

  filteredAttacks(moves) {
    let attackFilters = this.props.filter;
    return moves.filter(attack => attackFilters.every(filter => filter(attack)));
  }

  render() {
    let {characterID, character} = this.props;
    const moves = (character) ? (character.moves) : [];
    const menu = <FilterSideMenu navigator={navigator}/>;
    const filtered = this.filteredAttacks(moves);

    return (
      <SideMenu
        menu={menu}
        menuPosition={'right'}
        isOpen={false}>
      <View >
        <ScrollView style={Styles.mainContainer}>
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

function filteredAttacks(moves) {
  let attackFilters = this.props.filter;
  return moves.filter(attack => attackFilters.every(filter => filter(attack)));
}

/** MAPPING STATE **/
const mapStateToProps = function(state) {
  console.log(state);
  let {filter, character } = state;
  return {
    character,
    filter,
    //filteredData: filteredAttacks(character.moves)
  }
};

export default connect(mapStateToProps)(CharacterProfileScreen);
