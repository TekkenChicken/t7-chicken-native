// Actions
import {
  BLOB_SET_INITIAL_DATA,
  BLOB_UPDATE_DATA
} from '../actions/blob';

export default function blob( state = {}, action ) {
  switch(action.type) {
    case BLOB_SET_INITIAL_DATA:
      return Object.assign({}, state, {characterData: action.payload});
    case BLOB_UPDATE_DATA:
      return Object.assign({}, state, {characterData: action.payload});
  }
  return state;
}
