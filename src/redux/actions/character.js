import moveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';

// Action Types
export const CHARACTER_SET_DATA = 'CHARACTER_SET_DATA';
export const CHARACTER_FILTER_MOVES = 'CHARACTER_FILTER_MOVES';
export const CHARACTER_SEARCH_MOVES = 'CHARACTER_SEARCH_MOVES';

const setCharacterData = (data) => {
  return {
    type: CHARACTER_SET_DATA,
    data
  };
};

// this is what you want to send when you interact with the filter
// each property is a property that a filter pertains to in the actual move
const exampleFilterObj = {
	"hit_level": "h",
  "speed": { min: 10, max: 13 }
};

// MAIN FILTER METHOD
// for each property/filter we would just add a case
// the filter methods and give them a key matching the property
const filterMove = (move, filterObj) => {
	const passFilterCheck = Object
  	.keys(filterObj)
    .every((filter) => moveFiltersUtil[filter](move[filter], filterObj[filter]));

  return passFilterCheck;
};


// THE ACTION DISPATCHED WHEN YOU SUBMIT ON THE FILTERS
export const triggerfilterMovesList = (filterObj) => {
	return (dispatch, getState) => {
  	const currentState = getState();
    const allMoves = currentState.character.moves;
    const filteredMoves = allMoves.filter((move) => filterMove(move, filterObj));
    return dispatch(finishFilteredMovesList(filterObj, filterMoves));
  }
};

// ACTION DISPATCHED WHEN DONE FILTERING --> WILL REPOPULATE STATE IN REDUCER
export const finishfilteredMovesList = (filterObj, filteredMoves) => {
	return {
  	type: CHARACTER_FILTER_MOVES,
    movesFilter: filterObj,
    filteredMoves
  }
};

/**
 *  @method: fetchDataForCharacter
 *  @param: characterID [string]
 *  Fetch Data for a certain character from blob using character id to populate character page state
 */
export const fetchDataForCharacter = (characterID) => {
  return (dispatch, getState) => {
    const currentState = getState();
    const charData = currentState.blob.characterData[characterID];
    return dispatch(setCharacterData(charData));
  };
};
