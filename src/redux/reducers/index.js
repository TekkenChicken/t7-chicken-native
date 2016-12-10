import { combineReducers } from 'redux';

import characterData from './character-data-reducer';
//import filter from './filter-reducer';

const rootReducer = combineReducers({
	characterData
});

export default rootReducer;