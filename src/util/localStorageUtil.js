import {AsyncStorage} from 'react-native';
import _ from 'lodash';

const initialItem = {
  count: 0,
  id: 0
};

const STORAGE_KEY = 't7CharacterData';

/**  ----------------------------
 *   GET & SET for Local Storage
 *   ----------------------------
 * - Async Storage works on promises (must have callback and catches)
 * - are called at start and end of every action that mutates data in storage
 * - Must first recieve data nad then set at end
 *
 */

// NEED TO REWRITE

/**
 * Fetches all data in Async Storage and returns parsed content
 */
export async function fetchActivities() {
  console.log("fetching AsyncStorage data");
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((result) => JSON.parse(result))
    .catch((error) => error);
}

/**
 *  Set new activity data in Async Storage
 *  @type {object} Object containing set of new items
 */
async function setActivities(activityItems) {
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(activityItems))
    .then((result) => activityItems)
    .catch((error) => error);
}


/**  ----------------------------
 *   MAIN ACTIONS
 *   ----------------------------
 * - Add new Activity
 * - Increment Activity's Count
 *
 */

/////////////////////////////
//  ADDING ITEM
////////////////////////////
/**
 *  ADDING
 *  ------
 *  Action to add new activity item to activitiy data set
 *  will set new set of activity data with added activity at end
 *
 *  @type {object} Activity Item to be added
 */
export async function addNewActivity(activity) {
  console.log("ADD NEW ACTIVITY");
  // retrieve data
  return fetchActivities()
    .then((response) => {
      // push new activity
      if (response) {
        response.activityItems.push(
          Object.assign(activity, {
            ...initialItem,
            id: getNextActivityID(response.activityItems)
          })
        );

      // if this is the first ever activity added
      } else {
        // create new data
        response = {
          activityItems: [
            Object.assign(activity, {
              ...initialItem
            })
          ]
        };
      }
      // set new data
      return setActivities(response);
    })
    .catch((error) => {
      return error;
    });
}

/////////////////////////////
//  INCREMENTING on ITEM
////////////////////////////
/**
 *  INCREMENT
 *  ---------
 *  Finds activity item in data set by id and increments the count
 *  will set new data set with updated activity count at end
 *
 *  @type {number} ID of activity item to be incremented
 */
export async function incrementActivityItem(id) {
  // retrieve data
  return fetchActivities()
    .then((response) => {
        response.activityItems = incrementActivityByID(id, response.activityItems);
        // set new data
        return setActivities(response);
    })
    .catch((error) => {
        return error;
    });
}

/////////////////////////////
//  DELETING ITEM
////////////////////////////
/**
 *  DELETE
 *  ------
 *  Finds activity item in data set by id and REMOVES it
 *  will set new data set with updated activity count at end
 *
 *  @type {number} ID of activity item to be incremented
 */
export async function deleteActivityItem(id) {
  // retrieve data
  return fetchActivities()
    .then((response) => {
        response.activityItems = _.reject(response.activityItems, {id:id});
        console.log(response);
        // set new data
        return setActivities(response);
    })
    .catch((error) => {
        return error;
    });
}

/////////////////////////////
//  VIEW ITEM DETAILS
////////////////////////////
/**
 *  VIEW DETAILS
 *  ------------
 *  Finds an activity item and returns all of its information
 *
 *  @type {number} ID of activity item
 */
export async function viewActivityItem(id) {
  // retrieve data
  return fetchActivities()
    .then((response) => {
        let item = getMatchingActivityByID(response.activityItems, id);
        console.log("fetch item by id: " + id, item);
        // set new data
        return item;
    })
    .catch((error) => {
        return error;
    });
}



//////////////////////////
//  HELPERS
/////////////////////////

/**
 *  Returns a new id (greater than the highest ID)
 *  @type {array} set of activityitems
 */
function getNextActivityID(activityItems) {
  if (activityItems.length > 0) {
    const lastitem = _.maxBy(activityItems, 'id');
    return lastitem.id++;
  }

  return 0;
}

/**
 *  Returns activity item by ID
 *  @type {array} set of activityitems
 *  @type {number} ID specified
 */
function getMatchingActivityByID(activityItems, ID) {
    const selectedActivity = _.find(activityItems, {id: ID});
    return selectedActivity;
}

/**
 *  Finds and increments count of activity item in set by ID
 *  and returns the new updated set of items
 *
 *  @type {number} ID specified
 *  @type {array} set of activityitems
 */
function incrementActivityByID(id, activityItems) {
    for( let i = 0; i < activityItems.length; i++ ) {
      if (activityItems[i].id === id) {
        activityItems[i].count++;
      }
    }
    return activityItems;
}
