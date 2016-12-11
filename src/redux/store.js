import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

//import root reducer
import rootReducer from './reducers/index.js';

const loggerMiddleware = createLogger();

console.log('hello')

//create object for default data
export const defaultState = {

};

/**
  DATA DIAGRAM
  ------------

  {
    characterData: {
      frameData: (array)[],
      metaData: (object){},
      characterName: (string)""
    }
  }
  
**/



const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));


export default store;