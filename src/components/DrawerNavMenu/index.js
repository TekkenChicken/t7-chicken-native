import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

import Button from '../Button/Button';
import icons from '../../img/icons/';

class DrawerMenu extends Component {
	render() {
		const routes = this.props.navigation.state.routes;
		const currentRoute = this.props.navigation.state.index;
		return (
			<View style={Styles.mainContainer}>
				<View>
				<View style={Styles.logoContainer}>
					<Image style={Styles.logo} source={icons['logo']} />
				</View>
				</View>
				<ScrollView style={Styles.routeContainer}>
					<DrawerItems {...this.props} labelStyle={Styles.routeTitle} activeBackgroundColor='#260309'/>
				</ScrollView>
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#1b0105',
	},
	logoContainer: {
		flex: 1,
		paddingTop: 80,
		paddingBottom: 35,
		height: 160,
		backgroundColor: '#111',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		resizeMode: 'contain',
		height: 90,
	},
	routeContainer: {
		paddingTop: 10
	},
	currentRoute: {
		backgroundColor: '#260309'
	},
	routeTitle: {
		fontSize: 16,
		color: "#fff",
    fontFamily: 'Exo2-Light',
		fontWeight: '600'
	}
});

export default DrawerMenu;
