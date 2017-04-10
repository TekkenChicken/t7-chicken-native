// Initial In-App Stub Data
import initialData from '../../util/initialData.json';
// import * as LocalStorageAPI from '../../util/localStorageUtil.js';

// BLOB Types
export const BLOB_SET_INITIAL_DATA = 'BLOB_SET_INITIAL_DATA';
export const BLOB_UPDATE_DATA = 'BLOB_UPDATE_DATA';
export const BLOB_FETCH_SUCCESS = 'BLOB_FETCH_SUCCESS';
export const BLOB_FETCH_ERROR = 'BLOB_FETCH_ERROR';

const CHAR_DATA_API = "";
const DATA_VER_API = "";

/**
 *  @method: checkDataVersion
 *  Will get the current version of data, and compare it to local
 *  Will return if version matches or not
 */
const checkDataVersion = (timestamp) => {
  fetch(DATA_VER_API)
    .then((response) => {
      return timestamp !== timestamp;
    })
    .catch((error) => {
      console.log("DATA VERSION CHECK FAIL", error);
      return true;
    });
};

function dataFetchSuccess(response, character) {
	return {
    type: BLOB_FETCH_SUCCESS,
    payload: response,
  }
}

function dataFetchError(err, character) {
  return {
    type: BLOB_FETCH_ERROR,
    error: err
  }
}

const fetchDataFromAPI = () => {
  return dispatch => {
    fetch(CHARDATA_API)
      .then((response) => {
        console.log("FETCH CHAR DATA", response);
        return dispatch(dataFetchSuccess(response.json()));
      })
      .catch((error) => {
        console.error("WTF FETCH ERROR", error);
        return dispatch(dataFetchError(error));
      });
  };
};

const setInitialData = (payload) => {
  // store localstorage data (will be promise, need to rewrite)
  return {
    type: BLOB_SET_INITIAL_DATA,
    payload
  };
};

export const fetchInitialAppData = () => {
  // Will need to check if LocalStorage data exists (if not, use in-app stub data)
  let data = initialData.data;
  // reach ver endpoint and check version number
  // if version doesn't match, make call to retrieve new data
  // set data in state
  return dispatch => dispatch(setInitialData(data));
};
