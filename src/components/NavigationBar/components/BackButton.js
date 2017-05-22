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
    marginTop: -12
  },
  icon: {
    color: '#f0aa23',
    height: 20,
    width: 20,
    fontSize: 18,
    fontWeight: '700'
  }
});

BackButton.propTypes = {
  onToggleFilter: PropTypes.func
}

export default BackButton;
