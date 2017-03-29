// Initial In-App Stub Data
import initialData from '../../util/initialData.json';

// BLOB Types
export const BLOB_SET_INITIAL_DATA = 'BLOB_SET_INITIAL_DATA';
export const BLOB_UPDATE_DATA = 'BLOB_UPDATE_DATA';

const CHAR_DATA_API = "";
const DATA_VER_API = "";

/*  method: checkDataVersion
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

const fetchDataFromAPI = () => {
  return dispatch => {
    fetch(CHARDATA_API)
      .then((response) => {
        console.log("FETCH CHAR DATA", response);
        return dispatch(setInitialData(response.json()));
      })
      .catch((error) => {
        console.log("FETCH CHAR DATA", response);
        return initialData.data;
      });
  };
};

const setInitialData = (data) => {
  // store localstorage data (will be promise, need to rewrite)
  return {
    type: BLOB_SET_INITIAL_DATA,
    data
  };
};

export const fetchInitialAppData = () => {
  // check if LocalStorage data exists (if not, use in-app stub data)
  let data = initialData.data;
  // reach ver endpoint and check version number
  // if version doesn't match, make call to retrieve new data
  // set data in state
  return dispatch => dispatch(setInitialData(data));
};
