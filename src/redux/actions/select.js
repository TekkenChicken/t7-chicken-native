// Action Types
export const SELECT_UPDATE_SEARCH = 'SELECT_UPDATE_SEARCH';
export const SELECT_UPDATE_CHARACTERS = 'SELECT_UPDATE_CHARACTERS';

/**
 *  @method formatData
 *  @param {object} rawData
 *  @return {array} formattedData
 *  Will convert object with each 'character' as properties to an array of characters
 *  NEED TO DECIDE ON WHAT IS BEST WAY TO HANDLE THE DATA
 */
const formatRawData = (rawData) => {
  return Object.keys(rawData).map((char) => Object.assign({}, {id: char}, rawData[char]))
};

/**
 *  @method filterCharacters
 *  @param {string} searchQuery
 *  @return {array} characters
 *  take in search query and return array of characters that match
 */
export const searchCharacters = (searchQuery) => {
  searchQuery = searchQuery.trim().toLowerCase();
  return (dispatch, getState) => {
    const currentState = getState();
    const allChars = currentState.blob.characterData;
    const filteredCharacters = Object.keys(allChars)
      .reduce((result, char) => {
        if (searchQuery === char.substring(0, searchQuery.length)) {
          result.push( Object.assign(allChars[char], {id: char}) );
        }
        return result;
      }, []);

    return Promise.all([
      dispatch(updateSearchFilter(searchQuery)),
      dispatch(updateCharacters(filteredCharacters))
    ]);
  }
};

const updateCharacters = (characters) => {
  return {
    type: SELECT_UPDATE_CHARACTERS,
    characters
  };
};

// keep track of search query used for filtering characters
const updateSearchFilter = (searchQuery) => {
  return {
    type: SELECT_UPDATE_SEARCH,
    search: searchQuery
  }
};

/**
 *  Initial Character Data Fetch for Select Screen
 */
export const fetchCharacters = () => {
  return (dispatch, getState) => {
    const currentState = getState();
    const characterData = currentState.blob.characterData;
    const charactersList = (characterData) ? formatRawData(characterData) : [];
    return dispatch(updateCharacters(charactersList));
  };
};
