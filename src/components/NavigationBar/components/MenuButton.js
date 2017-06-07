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

class MenuButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}>
        <Image
          style={styles.icon}
          source={icons['menu']}
        />
      </TouchableHighlight>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    height: 25,
    width: 25
  },
  icon: {
    resizeMode: 'contain',
    height: 25,
    width: 25
  }
});

MenuButton.propTypes = {
  onPress: PropTypes.func
}

export default MenuButton;
