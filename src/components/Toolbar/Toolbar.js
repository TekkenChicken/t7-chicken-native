import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={Styles.toolbar}>
        <Text style={Styles.filter}>
          Filter v
        </Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  toolbar: {
    height: 40,
    alignItems: 'flex-end'
  },
  filter: {

  }
})
