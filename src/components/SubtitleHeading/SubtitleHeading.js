import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class SubtitleHeading extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <View style={Styles.background}>
        <Text style={Styles.text}>{this.props.subtitle}</Text>
      </View>
    )
  }
};

const Styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgb(65, 18, 18)',
  },
  text: {
    color: '#f0aeb1',
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10
  }
});
