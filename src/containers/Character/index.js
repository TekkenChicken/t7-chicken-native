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

// Styles
import Styles from './styles';

// dispatch actions


class CharacterScreen extends Component {

  componentDidMount() {
    // Fetch Data on character Or pass it in as props from navigation?
  }

  render() {
    return (
      <ScrollView style={Styles.mainContainer}>
      </ScrollView>
    );
  }
}


/** MAPPING STATE **/
const mapStateToProps = function(state) {
  return {
    character : this.state.character
  }
};

export default connect(mapStateToProps)(CharacterScreen);
