import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import blob from './blob'; // initial app data

// old need to remove
import characterData from './character-data-reducer';
import searchFilter from './search-filter-reducer';
import { attackFilters } from './filter-reducer';

import initialData from '../../util/initialData.json';

export default rootReducer = combineReducers({
	navigation: NavigationReducer,
	characterData,
	searchFilter,
	attackFilters,
	blob
});
