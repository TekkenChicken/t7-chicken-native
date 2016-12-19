import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();


const createStoreWithNavigation = createNavigationEnabledStore(createStore);

const store = createStoreWithNavigation(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware),
);

export default store;
