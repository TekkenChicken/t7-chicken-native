import { SET_SEARCH_FILTER, UPDATE_SEARCH_FILTER } from './actionCreators';

export function setSearch(data) {
  console.log('filter set');
  return {
    type: SET_SEARCH_FILTER,
    data
  }
}

export function updateFilter(data) {
  return {
    type: UPDATE_SEARCH_FILTER,
    filter: data
  }
}
