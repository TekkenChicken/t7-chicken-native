import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './FrameDataCardStyles'


export default class FrameDataCard extends React.Component {
  render() {
    return (
      <View style={Styles.card}>
        <Text style={Styles.text}>{this.props.notation}</Text>
      </View>
    )
  }
}
