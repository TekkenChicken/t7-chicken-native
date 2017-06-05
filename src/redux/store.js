import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

//const loggerMiddleware = createLogger();

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
