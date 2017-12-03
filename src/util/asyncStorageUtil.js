import {AsyncStorage} from 'react-native';

const STORAGE_KEY = 't7CharacterData';

const PROMPT_KEY = 't7UserPrompt';

/**  ----------------------------
 *   GET & SET for Local Storage
 *   ----------------------------
 * - Async Storage works on promises (must have callback and catches)
 * - are called at start and end of every action that mutates data in storage
 * - Must first recieve data and then set at end
 *
 */

function _getStorageData(key) {
  return AsyncStorage.getItem(key)
    .then((res) => JSON.parse(res))
    .catch((error) => error);
}

function _setStorageData(key, data) {
  return AsyncStorage.setItem(key, JSON.stringify(data))
    .then((res) => console.log("storing for key: ", key, data))
    .catch((error) => error);
}

function _clearStorageData(key) {
  return AsyncStorage.removeItem(key)
    .then((res) => res)
    .catch((error) => error);
}


/*-------------------------------/
/ BLOB data
/------------------------------*/

// Fetches the character data blob from storage
export async function fetchBlobData() {
  return _getStorageData(STORAGE_KEY);
}

/**
 *  Sets new character data blob in Async Storage
 *  @param {object} payload
 *  @param {string} timestamp
 */
export async function storeBlobData(payload, timestamp) {
  const newData = { data: payload, last_updated: timestamp };
  return _setStorageData(STORAGE_KEY, newData);
}

// Clears character data blob from storage
export async function clearBlobData() {
  return _clearStorageData(STORAGE_KEY);
}


/*-------------------------------/
/ Spreadsheet Prompt flag
/------------------------------*/

// Gets flag for Spreadsheet Prompt to decide the need to show it or not
export async function fetchUserPromptFlag() {
  return _getStorageData(PROMPT_KEY);
}

/**
 *  set the flag to decide whetheror not to show Spreadsheet prompt to user anymore
 *  @param {boolean} showFlag
 */
export async function storeUserPromptFlag(showFlag) {
  const userResponse = { showSpreadsheetPrompt: showFlag };
  return _setStorageData(PROMPT_KEY, userResponse);
}
