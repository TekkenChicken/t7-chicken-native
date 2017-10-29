// Actions
import {
    SHOW_ATTACK_DETAILS,
    PREVIOUS_ATTACK,
    NEXT_ATTACK
  } from '../actions/attackDetails';
  
  export default function showAttackDetails( state = {}, action ) {
    switch(action.type) {
        case SHOW_ATTACK_DETAILS:
          return Object.assign({}, state, {selectedAttack: action.payload});
          break;
        case PREVIOUS_ATTACK:
          return Object.assign({}, state, {selectedAttack: action.payload});
          break;
        case NEXT_ATTACK:
          return Object.assign({}, state, {selectedAttack: action.payload});
          break;
    }
    return state;
  }