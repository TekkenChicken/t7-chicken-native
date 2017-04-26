import * as moveFilterMethods from './moveFilterMethods';

/**
 *	@method: createFilterUtil
 *	@param: filterConfig (obj) -- will contain all filter objects { key, method } used to create one util
 *	Will take in a filterConfig and parse through each method to create a FilterUtil object
 *	The object will pair a key of the object to a method used for checking its value
 */
const createFilterMethodsMap = (filterMethods) => {
	let utilObj = {};
	Object.keys(filterMethods).forEach((filter) => {
		filter = filterMethods[filter];
		utilObj[filter.key] = filter.method;
	});
	return utilObj;
};

const _moveFilterMap = createFilterMethodsMap(moveFilterMethods);

/**
 *	@method: filterMoves
 * 	@param: moves [array], filterObj [obj] -- used to compare against moves
 */
const filterMoves = (moves, filterObj) => {
	return moves.filter( move =>
		Object
		.keys(filterObj)
		.every( key => _moveFilterMap[key](move, filterObj[key]) )
	);
}

export default { filterMoves };
