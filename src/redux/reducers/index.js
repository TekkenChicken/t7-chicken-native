import { combineReducers } from 'redux';

import blob from './blob'; // initial app data
import select from './select'; // initial app data
import character from './character'; // initial app data
import navigation from './navigation';
import attackDetails from './attackDetails';

export default rootReducer = combineReducers({
	blob,
	select,
	character,
	selectedAttack: attackDetails
});

