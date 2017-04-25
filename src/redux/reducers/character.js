// Actions
import {
  CHARACTER_SET_DATA,
  CHARACTER_FILTER_MOVES,
  CHARACTER_SEARCH_MOVES
} from '../actions/character';

const initialState = {
  name: '',
  moves: [], // all moves
  moveSearch: '', // search by name
};

function character( state = initialState, action ) {
  switch(action.type) {
    case CHARACTER_SET_DATA:
      return Object.assign({}, state, action.data);
  }
  return state;
}

export default character;
