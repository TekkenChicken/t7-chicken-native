import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Styles from './styles';

class CommandListBanner extends Component {
  render() {
    return (
      <View style={Styles.commandListContainer}>
        <Text style={Styles.commandListText}>COMMAND LIST</Text>
        <View style={Styles.randomLine} />
      </View>
    )
  }
}

export default CommandListBanner;
