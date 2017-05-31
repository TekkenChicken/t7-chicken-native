import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class CommandListBanner extends Component {
  render() {
    return (
      <View style={Styles.commandListContainer}>
        <Text style={Styles.commandListText}>COMMAND LIST</Text>
        <View style={Styles.borderLine} />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  commandListContainer: {
		backgroundColor: 'transparent',
		height: 40,
		paddingTop: 10
	},
	commandListText: {
		color: '#f0aa23',
		fontWeight: 'bold',
		paddingLeft: 18
	},
	borderLine: {
		width: 150,
		height: 6,
		backgroundColor: 'transparent',
		marginTop: 5
	},
});

export default CommandListBanner;
