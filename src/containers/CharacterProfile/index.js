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
import MoveList from './MoveList';
// Styles
import Styles from './styles';

// dispatch actions
import { fetchCharacters } from '../../redux/actions/select';
import { fetchInitialAppData } from '../../redux/actions/blob';


class CharacterProfileScreen extends Component {

  componentDidMount() {
    // Fetch Data on character Or pass it in as props from navigation?
    this.props.dispatch(fetchInitialAppData());
    this.props.dispatch(fetchCharacters());
  }

  render() {
    return (
      <ScrollView style={Styles.mainContainer}>
        <ProfileBanner />
        <ProfilePicture image='./../../img/Tile-Kazuya.png' />
        <ProfileName name="Kazuya Mishima" />
        <MoveList />
      </ScrollView>
    );
  }
}


/** MAPPING STATE **/
const mapStateToProps = function(state) {
  let { characters } = state.select;
  return {
    characters
  }
};

export default connect(mapStateToProps)(CharacterProfileScreen);
