import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';

import Button from '../Button/Button';
import icons from '../../img/icons/';

class DrawerMenu extends Component {
	render() {
		const routes = this.props.navigation.state.routes;
		const currentRoute = this.props.navigation.state.index;
    console.log(this.props.navigation);
		return (
			<View style={Styles.mainContainer}>
				<View>
				<View style={Styles.logoContainer}>
					<Image style={Styles.logo} source={icons['logo']} />
				</View>
				</View>
				<ScrollView style={Styles.routeContainer}>
					{
						routes.map((route, i) => {
							return(
								<Button
									key={i}
									onPress={() => this.props.navigation.navigate(route.key)}
									title={route.routeName}
									buttonStyle={[Styles.route, (i === currentRoute) ? Styles.currentRoute : '']}
									titleStyle={Styles.routeTitle}
									underlayColor="transparent"
								/>
							);
						})
					}
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
		paddingTop: 70,
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
		paddingTop: 25
	},
	route:{
		padding: 10,
		paddingLeft: 20,
		marginBottom: 10
	},
	currentRoute: {
		backgroundColor: '#260309'
	},
	routeTitle: {
		fontSize: 16,
		fontWeight: '600'
	}
});

export default DrawerMenu;
