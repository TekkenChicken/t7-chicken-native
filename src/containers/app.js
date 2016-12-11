import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../redux/reducers';
import HomeScreen from './HomeScreen/HomeScreen';
import About from '../components/About/About';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

const Router = createRouter(() => ({
	home: () => HomeScreen,
	about: () => About
}));


export default class App extends React.Component {
	render() {
		return (
			<NavigationProvider router={Router}>
				<StackNavigation initialRoute={Router.getRoute('home')} />
			</NavigationProvider>
			)
	}
}
