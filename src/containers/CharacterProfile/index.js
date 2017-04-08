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
// Styles
import Styles from './styles';

// dispatch actions


class CharacterProfileScreen extends Component {

  componentDidMount() {
    // Fetch Data on character Or pass it in as props from navigation?
  }

  render() {
    return (
      <ScrollView style={Styles.mainContainer}>
        <ProfileBanner />
      <ProfilePicture image='./../../img/Tile-Kazuya.png' />
        <ProfileName name="Kazuya Mishima" />
      </ScrollView>
    );
  }
}


/** MAPPING STATE **/
const mapStateToProps = function(state) {
  return {
    character : "Feng"
  }
};

export default connect(mapStateToProps)(CharacterProfileScreen);
