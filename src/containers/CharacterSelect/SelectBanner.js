import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class SelectBanner extends Component {
  render() {
    return (
      <Text style={Styles.banner}>Character Select</Text>
    )
  }
}

export default SelectBanner;

const Styles = StyleSheet.create({
  banner: {
    color: 'white',
    fontSize: 24,
		backgroundColor: 'rgb(65, 18, 18)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  }
})
