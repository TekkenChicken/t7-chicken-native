import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

// const store = createStoreWithNavigation(
//   rootReducer,
//   applyMiddleware(thunk, loggerMiddleware),
// );

// const createMainStore = (navReducer) => {
//   return createStore(
//     createRootReducer(navReducer),
//     undefined,
//     applyMiddleware(thunk, loggerMiddleware)
//   );
// };
//
// export default createMainStore;

export default createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk, loggerMiddleware)
);
