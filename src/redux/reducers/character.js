// Actions
import {
  CHARACTER_SET_DATA,
  CHARACTER_FILTER_MOVES,
  CHARACTER_SEARCH_MOVES
} from '../actions/character';

const initialState = {
  name: '',
  moves: [], // all moves
  moveFilter: [], // by frames, power, etc
  moveSearch: '', // search by name
  filteredMoves: [] // filtered moves after search/filter
};

function character( state = {}, action ) {
  switch(action.type) {
    case CHARACTER_SET_DATA:
      return Object.assign({}, state, action.data);
  }
  return state;
}

export default character;