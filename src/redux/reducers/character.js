// Actions
import {
  CHARACTER_SET_DATA,
  CHARACTER_RESET_DATA,
  CHARACTER_FILTER_MOVES,
  CHARACTER_SEARCH_MOVES,
  CHARACTER_APPLY_FILTERS,
  CHARACTER_QUEUE_FILTERS,
  CHARACTER_RESET_FILTERS,
  CHARACTER_UPDATE_DATA
} from '../actions/character';

import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';

const initialState = {
  name: '',
  data: [], // all moves
  filter: {},
  filterQueue: {},
  searchNotation: '',
  filteredMoves: [] //filtered moves
};

/**
 *  @method: updateFilter
 *  @param: key [int], value [misc], addFlag [bool]
 *  A key (obj property) and a value associated to the key will be received and used to update the filterQueue state
 *  Each key is used to notate an array in the filterQueue. If addFlag is true, then the value will be pushed to
 *  the array associated with that key. False, remove that value from the array.
 */
const updateFilterQueue = (currentQueue, action) => {
  let { key, value, addFlag } = action;
  let queue = {...currentQueue};
  queue[key] = queue[key] || [];

  if (addFlag) {
    queue[key].push(value);
  } else {
    queue[key].splice(queue[key].indexOf(value), 1);
    // if key's array had no values, delete it
    if (queue[key].length === 0) {
      delete queue[key];
    }
  }

  return queue;
};

const filterData = (currentMoves, filter, searchNotation) => {
  console.log('search notation tho', searchNotation)
  let moves = MoveFiltersUtil.filterMoves(currentMoves, filter);
  moves = MoveFiltersUtil.searchByNotation(moves, searchNotation);
  return moves;
}


function character( state = initialState, action ) {
  switch(action.type) {
    case CHARACTER_SET_DATA:
      return Object.assign({}, state, action.data, {filteredMoves: action.data.data});
    case CHARACTER_RESET_DATA:
      return initialState;
    case CHARACTER_APPLY_FILTERS:
      return Object.assign({}, state, { filter: state.filterQueue });
    case CHARACTER_QUEUE_FILTERS:
      return Object.assign({}, state, { filterQueue: updateFilterQueue(state.filterQueue, action) });
    case CHARACTER_UPDATE_DATA:
      return Object.assign({}, state, {filteredMoves: filterData(state.data, state.filterQueue, state.searchNotation)})
    case CHARACTER_RESET_FILTERS:
      return Object.assign({}, state, { filterQueue: {} });
    case CHARACTER_SEARCH_MOVES:
      return Object.assign({}, state, { searchNotation: action.notation });
  }
  return state;
}

export default character;
