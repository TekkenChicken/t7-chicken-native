import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const redSecondary = '#320f1c';

class CommandListBanner extends Component {
  render() {
    return (
      <View style={Styles.commandListContainer}>
        <Text style={Styles.commandListText}>COMMAND LIST</Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  commandListContainer: {
		backgroundColor: redSecondary,
		height: 40,
		paddingTop: 10,
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
