export const ADD_CURRENT_CITY = 'ADD_CURRENT_CITY';
export const ADD_SAVED_CITY = 'ADD_SAVED_CITY';
export const REMOVE_SAVED_CITY = 'REMOVE_SAVED_CITY';
export const SHOW_NOW_INFO = "SHOW_NOW_INFO";


export function addCurrentCity(City_Name) {
  return { type: ADD_CURRENT_CITY, City_Name }
}

export function addSavedCity(City_Name) {
  return { type: ADD_SAVED_CITY, City_Name }
}

export function removeSavedCity(City_Name) {
  return { type: REMOVE_SAVED_CITY, City_Name }
}

export function showNowInfo(nowInfo) {
  return { type: SHOW_NOW_INFO, nowInfo }
}


