import { combineReducers } from 'redux';

import characterData from './character-data-reducer';

const rootReducer = combineReducers({
	characterData
});

export default rootReducer;