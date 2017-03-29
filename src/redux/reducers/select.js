import {
  SELECT_UPDATE_FILTER,
  SELECT_UPDATE_CHARACTERS,
  SELECT_SET_CHARACTERS
} from '../actions/select';

const initialState = {
  characters: [],
  filter: null
};

export function select ( state = initialState, action ) {
  switch(action.type) {
    case SELECT_SET_CHARACTERS:
      return Object.assign({}, state, action.characters);
  }
  return state;
}
