// Actions
import {
  SHOW_ATTACK_DETAILS
} from '../actions/attackDetails';

const initialState = {
  move: {},
  index: null
};

export default function showAttackDetails( state = initialState, action ) {
  switch(action.type) {
      case SHOW_ATTACK_DETAILS:
        return Object.assign({}, state, action.payload);
        break;
  }
  return state;
}
