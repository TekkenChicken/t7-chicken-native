import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';
import {Styles} from './HomeScreenStyles';

export default class HomeScreen extends React.Component {
	render() {
		return (
			<View style={Styles.container}>
				<Text>Waddup tho</Text>
			</View>
			);
	}
}