import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableHighlight,
  Platform
} from 'react-native';

import icons from '../../../img/icons/';

class BackButton extends Component {
  render() {
    if (Platform.OS === "ios") {
      return (
        <TouchableHighlight
          onPress={() => this.props.navigation.goBack()}
          style={styles.button}>
          <Text style={styles.icon}>{"<"}</Text>
        </TouchableHighlight>
      );
    }
    return null;
  }
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
  },
  icon: {
    color: '#f0aa23',
    marginTop: -5,
    height: 40,
    width: 40,
    fontSize: 35,
    fontWeight: '700'
  }
});

BackButton.propTypes = {
  onToggleFilter: PropTypes.func
}

export default BackButton;
