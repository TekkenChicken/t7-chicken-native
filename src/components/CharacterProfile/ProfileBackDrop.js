import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

class ProfileBackDrop extends Component {
  render() {
    return (
      <View style={Styles.backDropContainer}>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  backDropContainer: {
    height: 160,
    backgroundColor: '#111'
  }
});

export default ProfileBackDrop;
