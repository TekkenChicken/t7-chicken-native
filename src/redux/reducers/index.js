import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import characterData from './character-data-reducer';
import dataFilter from './search-filter-reducer';

export default rootReducer = combineReducers({
	navigation: NavigationReducer,
	characterData,
	dataFilter
});
