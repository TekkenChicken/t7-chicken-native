import React from 'react'; 
import { View, Text } from 'react-native';
import { Styles } from './AboutStyles';

export default class About extends React.Component {
	static route = {
		navigationbar: {
			title: 'About'
		}
	}
	render() {
		return (
			<View style={Styles.container}>
				<Text>About tho</Text>
			</View>
			)
	}
}