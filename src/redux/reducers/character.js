// Actions
import {
  CHARACTER_SET_DATA,
  CHARACTER_RESET_DATA,
  CHARACTER_FILTER_MOVES,
  CHARACTER_SEARCH_MOVES,
  CHARACTER_APPLY_FILTERS
} from '../actions/character';

const initialState = {
  name: '',
  moves: [], // all moves
  moveSearch: '', // search by name,
  filter: {}
};

function character( state = initialState, action ) {
  switch(action.type) {
    case CHARACTER_SET_DATA:
      return Object.assign({}, state, action.data);
    case CHARACTER_APPLY_FILTERS:
      return Object.assign({}, state, { filter: action.filter });
    case CHARACTER_RESET_DATA:
      return initialState;
  }
  return state;
}

export default character;
