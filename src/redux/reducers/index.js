import { combineReducers } from 'redux';

import blob from './blob'; // initial app data
import select from './select'; // initial app data
import character from './character'; // initial app data
import navigation from './navigation';

export default rootReducer = combineReducers({
	navigation,
	blob,
	select,
	character
});

// const createRootReducer = (navReducer) => {
// 	return combineReducers({
// 		navigation: navReducer,
// 		blob,
// 		select,
// 		character
// 	});
// };
//
// export default createRootReducer;
