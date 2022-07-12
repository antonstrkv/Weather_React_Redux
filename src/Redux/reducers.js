/*import {
	ADD_CURRENT_CITY,
	ADD_SAVED_CITY,
	REMOVE_SAVED_CITY,
	SHOW_NOW_INFO,
} from './actions';
import { DEFOULT_CITY_OBJECT } from '../Consts';
import { saveStorageCurrentCity, saveStorageSavedCities } from '../functions';


const initialState = {
	nowInfo: DEFOULT_CITY_OBJECT,
	currentCity: localStorage.getItem('currentCity') ?? '',
	savedCities: JSON.parse(localStorage.getItem('savedCities')) ?? [],
}


function currentCity(state, action) {
	switch (action.type) {
		case ADD_CURRENT_CITY:
			saveStorageCurrentCity(action.City_Name);
			return action.City_Name;
		default:
			return state
	}
}


function savedCities(state = [], action) {
	let newList = [];
	switch (action.type) {
		case ADD_SAVED_CITY:
			newList = [...state, action.City_Name];
			saveStorageSavedCities(newList);
			return newList;
		case REMOVE_SAVED_CITY:
			newList = [...state];
			newList.splice(newList.indexOf(action.City_Name, 0), 1);
			saveStorageSavedCities(newList);
			return newList;
		default:
			return state
	}
}

function nowInfo(state, action) {
	switch (action.type) {
		case SHOW_NOW_INFO:
			return action.nowInfo;
		default:
			return state
	}
}


function WeatherApp(state = initialState, action) {
	return {
		nowInfo: nowInfo(state.nowInfo, action),
		currentCity: currentCity(state.currentCity, action),
		savedCities: savedCities(state.savedCities, action),
	}
}

export default WeatherApp*/