// Action Types
export const CHARACTER_SET_DATA = 'CHARACTER_SET_DATA';
export const CHARACTER_FILTER_MOVES = 'CHARACTER_FILTER_MOVES';
export const CHARACTER_SEARCH_MOVES = 'CHARACTER_SEARCH_MOVES';

const setCharacterData = (data) => {
  return {
    type: CHARACTER_SET_DATA,
    data
  };
};

/**
 *  @method: fetchDataForCharacter
 *  @param: characterID [string]
 *  Fetch Data for a certain character from blob using character id to populate character page state
 */
export const fetchDataForCharacter = (characterID) => {
  return (dispatch, getState) => {
    const currentState = getState();
    const charData = currentState.blob.characterData[characterID];
    return dispatch(setCharacterData(charData));
  };
};
