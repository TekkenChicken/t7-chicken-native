import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import characterData from './character-data-reducer';
import searchFilter from './search-filter-reducer';
import { attackFilters } from './filter-reducer';

export default rootReducer = combineReducers({
	navigation: NavigationReducer,
	characterData,
	searchFilter,
	attackFilters
});
