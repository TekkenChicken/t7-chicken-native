import {
  SET_SEARCH_FILTER,
  UPDATE_SEARCH_FILTER
} from '../actions/actionCreators';

const initialState = {
  filter: ''
}

export function dataFilter(state = initialState, action) {
  switch (action.type) {

    case SET_SEARCH_FILTER:
    console.log('filter action', action);
    return Object.assign({}, state, {
      filter: action.data
    });

    case UPDATE_SEARCH_FILTER:
    console.log('update filter', action);
    return Object.assign({}, state, {
      filter: action.filter
    });

  }
  return state;
}

export default dataFilter;
