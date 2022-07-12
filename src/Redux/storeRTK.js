import { configureStore } from '@reduxjs/toolkit';
import WeatherAppSlice from './redusersRTK';

export const store = configureStore({
	reducer: {
		weather: WeatherAppSlice,
	},
})

const unsubscribe = store.subscribe(() => console.log(store.getState()))