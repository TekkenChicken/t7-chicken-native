import React from 'react';
import { Provider, connect } from 'react-redux';

// dependencies
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Router from './Router';

// components
import InitialLoading from './InitialLoading/';
import DrawerNavMenu from '../components/DrawerNavMenu/';

// Main Stack Navigators
const MainNavigator = StackNavigator(Router.MainRoutes, { initialRouteName: "characterSelect", headerMode: 'screen'});
const AboutNavigator = StackNavigator(Router.AboutRoute, { initialRouteName: "about", headerMode:'screen' });

const DrawerRoutes = {
	Characters: {
		name: 'Tekken Characters',
		screen: MainNavigator
	},
	About: {
		name: 'About',
		screen: AboutNavigator
	}
};

const DrawerConfig = {
  drawerWidth: 200,
  contentComponent: ({navigation}) => <DrawerNavMenu navigation />,
};

// Hacky solution to nesting stack navigator in drawer but still having stack header configuring abilities
const RootNavigator = StackNavigator(
  {
    InitialLoading: {
      name: "Loading",
      screen: InitialLoading,
    },
    Main: {
      name: 'Main',
      screen: DrawerNavigator(DrawerRoutes, {drawerWidth: 200, contentComponent: DrawerNavMenu})
    }
  },
  {
    initialRouteName: "InitialLoading",
    headerMode: 'none',
    cardStyle: {backgroundColor: '#111111'}
	}
);

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(RootNavigator);
