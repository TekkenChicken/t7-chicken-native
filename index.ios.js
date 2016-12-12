import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

 import {
   NavigationContext,
   NavigationProvider,
   StackNavigation
 } from '@exponent/ex-navigation';

 import store from './src/redux/store';
 import HomeScreen from './src/containers/HomeScreen/HomeScreen';

 import { Router } from './src/containers/Router';

const navigationContext = new NavigationContext({
  router: Router,
  store
});

export default class App extends React.Component {

	render() {
		console.log(navigationContext);
		return (
			<Provider store={store}>
				<NavigationProvider context={navigationContext} router={Router}>
					<StackNavigation initialRoute={Router.getRoute('home')} />
				</NavigationProvider>
			</Provider>
			)
	}
}

AppRegistry.registerComponent('t7ChickenNative', () => App);