import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import icons from '../../../img/icons/';

class BackButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.goBack()}
        style={styles.button}>
        <Text style={styles.icon}>{"<"}</Text>
      </TouchableHighlight>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    height: 20,
    width: 20,
  },
  icon: {
    color: '#f0aa23',
    marginTop: -4,
    height: 20,
    width: 20,
    fontSize: 20,
    fontWeight: '700'
  }
});

BackButton.propTypes = {
  onToggleFilter: PropTypes.func
}

export default BackButton;
