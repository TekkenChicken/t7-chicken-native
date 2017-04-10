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

export const fetchCharacterData = (character, index) => {
  return (dispatch, getState) => {
    const currentState = getState();
    const charData = currentState.blob.characterData[index];
    return dispatch(setCharacterData(charData));
  };
};
