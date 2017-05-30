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
		backgroundColor: 'rgb(65, 18, 18)',
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
		backgroundColor: '#f0aa23',
		marginTop: 5
	},
});

export default CommandListBanner;
