import { SERVER } from "./Consts"
import { loadJson_action } from "./Redux/redusersRTK";
import { useDispatch } from "react-redux";
import { getWeather } from './functions.js';
import React, { useState } from 'react';
export { CreateForm };



function CreateForm({ addNowInfo, addForecastList }) {
	const [city, setCity] = useState('');
	const dispatch = useDispatch();

	function sendRequest(event) {
		dispatch(loadJson_action(city));
		getWeather(city, addNowInfo, addForecastList);
		setCity('');
		event.preventDefault();
	}

	return (
		<form className='search-form' onSubmit={sendRequest}>
			<input type="text" value={city} className='search__input' placeholder="Enter the city"
				onChange={(event) => { setCity(event.target.value) }} />
			<button className='search__btn' type="submit"></button>
		</form>
	)
}