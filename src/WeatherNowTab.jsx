import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSavedCities, removeSavedCities } from './Redux/redusersRTK';
export { CreateWeatherNowTab };

function CreateWeatherNowTab({ savedCityList, cityNowInfo }) {
	const isSavedCity = savedCityList.includes(cityNowInfo.titleFirstTab, 0);

	const dispatch = useDispatch();

	useEffect(() => {
		const heartBtn = document.querySelector('.weather-now__btn');
		if (isSavedCity) {
			heartBtn.classList.add('weather-now__btn--active');
		} else if (!isSavedCity) {
			heartBtn.classList.remove('weather-now__btn--active');
		}
	})

	const doClick = () => {
		if (isSavedCity) {
			dispatch(removeSavedCities(cityNowInfo.titleFirstTab));
		} else if (!isSavedCity) {
			dispatch(addSavedCities(cityNowInfo.titleFirstTab));
		}
	}


	return (
		<div className="weather-now main-tabs__block main-tabs__block--active" id="tab_1">
			<p className="weather-now__temperature">{cityNowInfo.temperatureFirstTab}</p>
			<img className="weather-now__img" src={cityNowInfo.imgFirstTab} />
			<div className="weather-now__like">
				<h3 className="weather-title__now">{cityNowInfo.titleFirstTab}</h3>
				<button className="weather-now__btn hidden"
					onClick={doClick}>
				</button>
			</div>
		</div>
	)
}