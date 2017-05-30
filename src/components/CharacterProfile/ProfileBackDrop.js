import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class ProfileBackDrop extends Component {
  render() {
    return (
      <LinearGradient colors={['#9d1018', '#320flc']}
        style={Styles.backDropContainer}>

      </LinearGradient>
    );
  }
}

const Styles = StyleSheet.create({
  backDropContainer: {
    height: 160,
  },
  gradient: {
    flex: 1,
    width: 200
  }
});

export default ProfileBackDrop;
