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
import SearchBar from '../../components/SearchBar/SearchBar';
// Styles
import Styles from './styles';

// dispatch actions
import { fetchDataForCharacter } from '../../redux/actions/character';

class CharacterProfileScreen extends Component {

  componentDidMount() {
    // Fetch Data on character using character ID sent as props on navigate
    this.props.dispatch(fetchDataForCharacter(this.props.characterID));
  }

  render() {
    let {characterID, characterMoves} = this.props;
    return (
      <ScrollView style={Styles.mainContainer}>
        <SearchBar />
        <ProfileBanner />
        <ProfilePicture image='./../../img/Tile-Kazuya.png' />
        <ProfileName name={characterID.toUpperCase()} />
        <MoveList moves={characterMoves} />
      </ScrollView>
    );
  }
}


/** MAPPING STATE **/
const mapStateToProps = function(state) {
  let { character } = state.character;
  return {
    character
  }
};

export default connect(mapStateToProps)(CharacterProfileScreen);
