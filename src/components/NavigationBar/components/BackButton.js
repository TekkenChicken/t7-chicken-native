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
    height: 36,
    width: 36,
  },
  icon: {
    color: '#f0aa23',
    marginTop: -1,
    height: 36,
    width: 36,
    fontSize: 28,
    fontWeight: '500'
  }
});

BackButton.propTypes = {
  onToggleFilter: PropTypes.func
}

export default BackButton;
