import {AsyncStorage} from 'react-native';

const STORAGE_KEY = 't7CharacterData';

const PROMPT_KEY = 't7UserPrompt';

/**  ----------------------------
 *   GET & SET for Local Storage
 *   ----------------------------
 * - Async Storage works on promises (must have callback and catches)
 * - are called at start and end of every action that mutates data in storage
 * - Must first recieve data nad then set at end
 *
 */

/**
 * Fetches all data in Async Storage and returns parsed content
 */
export async function fetchAppData() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((res) => JSON.parse(res))
    .catch((error) => error);
}

/**
 *  Set new character data in Async Storage
 *  @type {object} Object containing set of new items
 */
export async function storeAppData(payload, timestamp) {
  const newData = { data: payload, last_updated: timestamp };
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData))
    .then((res) => console.log("storing",newData))
    .catch((error) => error);
}

/**
 *  Clears tekken data in Async Storage
 */
export async function clearAppData() {
  return AsyncStorage.removeItem(STORAGE_KEY)
    .then((res) => res)
    .catch((error) => error);
}

export async function spreadsheetAwareCheck() {
  return AsyncStorage.getItem(PROMPT_KEY)
  .then((res) => {
    return JSON.parse(res)
  })
  .catch((error) => error);
}

export async function spreadsheetAware(answer) {
  const userResponse = { spreadsheetAware: answer };
  return AsyncStorage.setItem(PROMPT_KEY, JSON.stringify(userResponse))
  .then((res) => console.log('User answer:', userResponse))
  .catch((error) => error)
}

export async function clearPromptData() {
  return AsyncStorage.removeItem(PROMPT_KEY)
  .then((res) => res)
  .catch((error) => error);
}