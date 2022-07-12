import { getWeather } from './functions.js';
import { useDispatch } from 'react-redux';
import { removeSavedCities } from './Redux/redusersRTK';

export { CreateSavedCityElement };



function CreateSavedCityElement({ index, addNowInfo, addForecastList, City_Name, }) {

	const dispatch = useDispatch();

	return (
		<li key={index} className="city-list__item">
			<button className="main__btn" onClick={() => {
				getWeather(City_Name, addNowInfo, addForecastList)
			}}>
				{City_Name}
			</button>
			<button className="city-list__close-btn"
				onClick={() => { dispatch(removeSavedCities(City_Name)) }}>
			</button>
		</li>
	)
}