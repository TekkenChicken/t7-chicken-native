import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil'
import { BLOB_UPDATE_DATA } from './blob';

// Action Types
export const CHARACTER_SET_DATA = 'CHARACTER_SET_DATA';
export const CHARACTER_UPDATE_DATA = 'CHARACTER_UPDATE_DATA';
export const CHARACTER_RESET_DATA = 'CHARACTER_RESET_DATA';
export const CHARACTER_FILTER_MOVES = 'CHARACTER_FILTER_MOVES';
export const CHARACTER_SEARCH_MOVES = 'CHARACTER_SEARCH_MOVES';
export const CHARACTER_APPLY_FILTERS = 'CHARACTER_APPLY_FILTERS';
export const CHARACTER_QUEUE_FILTERS = 'CHARACTER_QUEUE_FILTERS';
export const CHARACTER_RESET_FILTERS = 'CHARACTER_RESET_FILTERS';

const setCharacterData = (data) => {
  return {
    type: CHARACTER_SET_DATA,
    data
  };
};

/**
 *  @method fetchDataForCharacter
 *  @param {string} characterID
 *  Fetch Data for a certain character from blob using character id to populate character page state
 */
export const fetchDataForCharacter = (characterID) => {
  return (dispatch, getState) => {
    const currentState = getState();
    const charData = currentState.blob.characterData[characterID];
    return dispatch(setCharacterData(charData));
  };
};

export const updateCharacterData = () => {
  return {
    type: CHARACTER_UPDATE_DATA
  }
}

/**
 *  @method resetDataForCharacter
 *  resets Character State
 */
export const resetDataForCharacter = (filter) => {
  return {
    type: CHARACTER_RESET_DATA
  };
};

/**
 *  @method applyCharacterMoveFilters
 *  Trigger applying queue into actual filter property
 */
export const applyCharacterMoveFilters = () => {
  return {
    type: CHARACTER_APPLY_FILTERS
  };
};

/**
 *  @method queueCharacterMoveFilters
 *  @param {int} key
 *  @param {misc} value
 *  @param {boolean} addFlag
 *  A key (obj property) and a value associated to the key will be received and used to update the filterQueue state
 */
export const queueCharacterMoveFilters = (key, value, addFlag) => dispatch => {
  dispatch({
    type: CHARACTER_QUEUE_FILTERS,
    key,
    value,
    addFlag
  });
  dispatch(updateCharacterData())
};

/**
 *  @method resetCharacterMoveFilters
 *  Trigger reseting move filter properties in character state
 */
export const resetCharacterMoveFilters = () => {
  return {
    type: CHARACTER_RESET_FILTERS
  };
};

/**
 *  @method searchMovesByNotation
 *  Trigger action to filter moves by user notation inputted
 */
export const searchMovesByNotation = (notation) => {
  return {
    type: CHARACTER_SEARCH_MOVES,
    notation: notation.trim().replace(/\s/g,'')
  };
};
