// Initial In-App Stub Data
import initialData from '../../util/initialData.json';
import * as AsyncStorageUtil from '../../util/asyncStorageUtil.js';

// BLOB Types
export const BLOB_SET_INITIAL_DATA = 'BLOB_SET_INITIAL_DATA';
export const BLOB_UPDATE_DATA = 'BLOB_UPDATE_DATA';
export const BLOB_FETCH_SUCCESS = 'BLOB_FETCH_SUCCESS';
export const BLOB_FETCH_ERROR = 'BLOB_FETCH_ERROR';

const CHAR_DATA_API = "http://api.tekkenchicken.com/api/framedata/";
const CHAR_METADATA_API = "http://api.tekkenchicken.com/api/metadata/"

/**
 *  @method: checkDataVersion
 *  Will get the current version of data, and compare it to local
 *  Will return if version matches or not
 */
const checkIfDataOutdated = (localTimeStamp) => {
  return fetch(CHAR_METADATA_API)
    .then((response) => {
      return response.json()
    }).then((json) => {
      const serverTimeStamp = json.alisa.last_updated;
      return { outDated: localTimeStamp !== serverTimeStamp, last_updated: serverTimeStamp };
    })
    .catch((error) => {
      return { outDated: false };
    });
};

const dataFetchSuccess = (response, timestamp) => {
  AsyncStorageUtil.storeAppData(response, timestamp);
	return {
    type: BLOB_FETCH_SUCCESS,
    payload: response,
  };
};

const dataFetchError = (err, fallbackData) => {
  return {
    type: BLOB_FETCH_ERROR,
    error: err,
    fallbackData
  };
};

const fetchDataFromAPI = (fallbackData, timestamp) => {
  return dispatch => {
    fetch(CHAR_DATA_API)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        dispatch(dataFetchSuccess(json, timestamp));
      })
      .catch((error) => {
        dispatch(dataFetchError(error, fallbackData));
      });
  };
};

const setInitialData = (payload) => {
  return {
    type: BLOB_SET_INITIAL_DATA,
    payload
  };
};

export const fetchInitialAppData = () => {
  // Will need to check if LocalStorage data exists (if not, use in-app stub data)
  // reach ver endpoint and check version number
  // if version doesn't match, make call to retrieve new data
  // set data in state

  // default in-app data
  let appData = initialData.data;
  let timestamp = initialData.last_updated;

  return dispatch => {
    AsyncStorageUtil.fetchAppData()
    .then((storedPayload) => {
      // use data from storage if available
      if (storedPayload) {
        appData = storedPayload.data;
        timestamp = storedPayload.last_updated;
      }
      //check if data is out of date by hitting version endpoint
      checkIfDataOutdated(timestamp).then((result) => {
        if (result.outDated) {
          return dispatch(fetchDataFromAPI(appData, result.last_updated));
        } else {
          return dispatch(setInitialData(appData));
        }
      });
    })
    .catch((err) => dispatch(fetchDataFromAPI(appData)) );
  }
};
