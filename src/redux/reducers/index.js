import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import blob from './blob'; // initial app data
import select from './select'; // initial app data
import character from './character'; // initial app data
import filter from './filter';

console.log(filter);

export default rootReducer = combineReducers({
	navigation: NavigationReducer,
	blob,
	select,
	character,
	filter
});
