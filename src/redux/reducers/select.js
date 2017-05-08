import {
  SELECT_UPDATE_SEARCH,
  SELECT_UPDATE_CHARACTERS
} from '../actions/select';

const initialState = {
  characters: [],
  search: ''
};

function select ( state = initialState, action ) {
  switch(action.type) {
    case SELECT_UPDATE_CHARACTERS:
      console.log("new state", Object.assign({}, state, {characters: action.characters}));
      return Object.assign({}, state, {characters: action.characters});
    case SELECT_UPDATE_SEARCH:
      return Object.assign({}, state, {search: action.search});
  }
  return state;
}

export default select;
