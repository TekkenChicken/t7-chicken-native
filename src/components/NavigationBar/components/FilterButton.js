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

class FilterButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onToggleFilter}
        style={styles.button}>
        <Image
          style={styles.icon}
          source={icons['filter']}
        />
      </TouchableHighlight>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 48,
    paddingLeft: 10,
    justifyContent: 'center'
  },
  icon: {
    resizeMode: 'contain',
    height: 28,
    width: 30
  }
});

FilterButton.propTypes = {
  onToggleFilter: PropTypes.func
}

export default FilterButton;
