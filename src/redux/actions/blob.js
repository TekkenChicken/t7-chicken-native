// Initial In-App Stub Data
import initialData from "../../util/initialData.json";
import * as AsyncStorageUtil from "../../util/asyncStorageUtil.js";
import CommonLabels from "../../util/commonLabels";

// BLOB Types
export const BLOB_SET_INITIAL_DATA = "BLOB_SET_INITIAL_DATA";
export const BLOB_UPDATE_DATA = "BLOB_UPDATE_DATA";
export const BLOB_FETCH_SUCCESS = "BLOB_FETCH_SUCCESS";
export const BLOB_FETCH_ERROR = "BLOB_FETCH_ERROR";
export const BLOB_FETCH_OFFLINE = "BLOB_FETCH_OFFLINE";
export const BLOB_SHOW_SPREADSHEETPROMPT = "BLOB_SHOW_SPREADSHEETPROMPT";

const CHAR_DATA_API = "http://api.tekkenchicken.com/api/framedata/";
const CHAR_METADATA_API = "http://api.tekkenchicken.com/api/metadata/";

/**
 *  @method checkDataVersion
 *  Will get the current version of data, and compare it to local
 *  Will return if version matches or not
 */
const checkIfDataOutdated = localTimeStamp => {
  return fetch(CHAR_METADATA_API)
    .then(response => {
      return response.json();
    })
    .then(json => {
      const serverTimeStamp = json.alisa.last_updated;
      return {
        outDated: localTimeStamp !== serverTimeStamp,
        last_updated: serverTimeStamp
      };
    })
    .catch(error => {
      return { outDated: false };
    });
};

/**
 *  @method dataFetchSuccess
 *  @param {object} response -- fetched character dataFetchError
 *  @param {string} timestamp -- timestamp of last updated data (used to decide if user needs to fetch new data on next visit)
 *  Fetches the character data from the service for app use and stores it along with meta data in app storage
 */
const dataFetchSuccess = (response, timestamp) => {
  AsyncStorageUtil.storeBlobData(response, timestamp);
  return {
    type: BLOB_FETCH_SUCCESS,
    payload: response
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
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(dataFetchSuccess(json, timestamp));
      })
      .catch(error => {
        dispatch(dataFetchError(error, fallbackData));
      });
  };
};

/**
 * @method setInitialData
 * @param {object} payload - all characters data
 */
const setInitialData = payload => {
  return {
    type: BLOB_SET_INITIAL_DATA,
    payload
  };
};

/**
 *  @method fetchInitialAppData
 *  Will need to check if LocalStorage data exists (if not, use in-app stub data)
 *  reach ver endpoint and check version number
 *  if version doesn't match, make call to retrieve new data
 *  set data in state
 */
export const fetchInitialAppData = isConnected => {
  // default in-app data
  let appData = initialData.data;
  let timestamp = initialData.last_updated;

  return dispatch => {
    AsyncStorageUtil.fetchBlobData()
      .then(storedPayload => {
        // use data from storage if available
        if (storedPayload) {
          appData = storedPayload.data;
          timestamp = storedPayload.last_updated;
        }
        // Check if user has online connectivity
        if (isConnected) {
          // check if data is out of date by hitting version endpoint
          checkIfDataOutdated(timestamp).then(result => {
            if (result.outDated) {
              return dispatch(fetchDataFromAPI(appData, result.last_updated));
            } else {
              return dispatch(setInitialData(appData));
            }
          });
        } else {
          return dispatch(dataFetchError(CommonLabels.errors.offline, appData));
        }
      })
      .catch(err => dispatch(fetchDataFromAPI(appData)));
  };
};

/*------------------------------------------/
 *  In-App User Prompts:
 *  ==================
 *    - Spreadsheet
 *
/------------------------------------------*/

/**
 *  @method setSpreadsheetPrompt
 *  @param {boolean} showFlag
 *  Set boolean flag to decide to show spreadsheet prompt or not in app
 */
const setSpreadsheetPrompt = showFlag => {
  return {
    type: BLOB_SHOW_SPREADSHEETPROMPT,
    showFlag
  };
};

/**
 *  @method hideSpreadsheetPrompt
 *  Update app to hide spreadsheet prompts now and store that setting in storage
 */
export const hideSpreadsheetPrompt = () => {
  AsyncStorageUtil.storeUserPromptFlag(false);
  return dispatch => dispatch(setSpreadsheetPrompt(false));
};

/**
 * @method fetchUserPromptFlag
 * Fetches flags to show certain user prompts
 */
export const fetchUserPromptFlag = () => {
  return dispatch => {
    return AsyncStorageUtil.fetchUserPromptFlag()
      .then(userPromptFlag => {
        // Spreadsheet: Decide whether or not to show Spreadsheet Prompt Alert to user (based on if they've seen it already)
        const showSpreadsheetPrompt = userPromptFlag
          ? userPromptFlag.showSpreadsheetPrompt
          : true;
        return dispatch(setSpreadsheetPrompt(showSpreadsheetPrompt));
      })
      .catch(error => console.log(error));
  };
};
