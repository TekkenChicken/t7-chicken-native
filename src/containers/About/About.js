import React from 'react'; 
import { View, Text } from 'react-native';
import { Styles } from './AboutStyles';

import { createRouter }  from '@exponent/ex-navigation';

 const Router = createRouter(() => ({
   home: () => HomeScreen,
   about: () => About,
 }));

export default class About extends React.Component {
	static route = {
		navigationbar: {
			title: 'About'
		}
	}

	goBack = () => {
		this.props.navigator.pop();
	}

	render() {
		return (
			<View style={Styles.container}>
				<Text>About tho</Text>
				<Text onPress={this.goBack}> Back </Text>
			</View>
			)
	}
}