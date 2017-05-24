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
        onPress={this.props.onToggleFilter}
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
    height: 18,
    width: 18
  },
  icon: {
    resizeMode: 'contain',
    height: 18,
    width: 18
  }
});

MenuButton.propTypes = {
  onToggleFilter: PropTypes.func
}

export default MenuButton;
