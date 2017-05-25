import React, { Component } from 'react';
import { View,
  Text,
  StyleSheet
} from 'react-native';

export default class FrameHeader extends Component {
  render() {
    return (
      <View style={Styles.background}>
        <Text style={Styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgb(65, 18, 18)',
  },
  text: {
    fontSize: 24,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    fontFamily: 'Exo2-Regular'
  }
});
