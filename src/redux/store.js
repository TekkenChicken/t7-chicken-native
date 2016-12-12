import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';


const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

const store = createStoreWithNavigation(
	combineReducers({
		rootReducer,
		navigation: NavigationReducer
	}));

export default store;
