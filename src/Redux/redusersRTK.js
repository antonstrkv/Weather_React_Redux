import { DEFOULT_CITY_OBJECT } from '../Consts';
import { saveStorageCurrentCity, saveStorageSavedCities } from '../functions';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER } from '../Consts';

export const loadJson_action = createAsyncThunk(
	"weather/loadJson_action",
	async (cityName) => {
		const requestUrl = `${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}`;
		return fetch(requestUrl)
			.then(response => {
				if (response.ok) {
					return response.json()
				}
			})
	}
)

const initialState = {
	nowInfo: DEFOULT_CITY_OBJECT,
	currentCity: localStorage.getItem('currentCity') ?? '',
	savedCities: JSON.parse(localStorage.getItem('savedCities')) ?? [],
}

export const WeatherAppSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		setCurrentCity: (state, action) => {
			saveStorageCurrentCity(action.payload);
			state.currentCity = action.payload;
		},
		addSavedCities: (state, action) => {
			state.savedCities.push(action.payload);
			saveStorageSavedCities(state.savedCities);
		},
		removeSavedCities: (state, action) => {
			state.savedCities = state.savedCities.filter(item => item !== action.payload);
			saveStorageSavedCities(state.savedCities);
		}
	},
	extraReducers: {
		[loadJson_action.fulfilled]: (state, action) => {
			state.nowInfo = action.payload;
		}
	}
});

export const { setCurrentCity, addSavedCities, removeSavedCities } = WeatherAppSlice.actions
export default WeatherAppSlice.reducer;


