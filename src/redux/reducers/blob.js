// Actions
import {
  BLOB_SET_INITIAL_DATA,
  BLOB_UPDATE_DATA
} from '../actions/blob';

export function blob( state = {}, action ) {
  switch(action.type) {
    case BLOB_SET_INITIAL_DATA:
      return Object.assign({}, state, action.data);
    case BLOB_UPDATE_DATA:
      return Object.assign({}, state, action.data);
  }
  return state;
}
