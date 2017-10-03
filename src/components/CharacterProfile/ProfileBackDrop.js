import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const redPrimary = '#9d1918';
const redSecondary = '#320f1c';

class ProfileBackDrop extends Component {
  // To do: Have dynamic character background images here
  render() {
    return (
      <LinearGradient colors={[redSecondary, redSecondary]} style={Styles.backDropContainer}>

      </LinearGradient>
    );
  }
}

const Styles = StyleSheet.create({
  backDropContainer: {
    height: 130
  },
  gradient: {
    flex: 1,
    width: 200
  }
});

export default ProfileBackDrop;
