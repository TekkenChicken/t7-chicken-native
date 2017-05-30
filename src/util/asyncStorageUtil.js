import {AsyncStorage} from 'react-native';

const STORAGE_KEY = 't7CharacterData';

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
  console.log( newData );
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
