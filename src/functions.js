import { SERVER, MONTHS } from './Consts.jsx';
export { loadJson, dateConverter, timeConverter, getWeather, saveStorageCurrentCity, saveStorageSavedCities };



async function getWeather(CityName, addNowInfo, addForecastList) {
	let json = await loadJson(CityName, SERVER.URL);
	addNowInfo(json);
	let jsonForecast = await loadJson(CityName, SERVER.URL_FORCAST);
	addForecastList(jsonForecast);
	showHeart();
}


function loadJson(cityName, url) {
	const requestUrl = `${url}?q=${cityName}&appid=${SERVER.API_KEY}`;

	return fetch(requestUrl)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
		})
		.catch(err => alert(`Ошибка: ${err.message}`))
}


function saveStorageCurrentCity(Name) {
	const currentCity = Name;
	localStorage.setItem('currentCity', currentCity);
}

function saveStorageSavedCities(arrCities) {
	let savedCities = JSON.stringify(arrCities);
	localStorage.setItem('savedCities', savedCities);
}


function showHeart() {
	document.querySelector('.weather-now__btn').classList.remove('hidden');
}


function dateConverter(unix) {
	const date = new Date(unix * 1000);
	const month = MONTHS[date.getMonth()];

	let day = String(date.getDate());
	if (day.length === 1) {
		day = 0 + day;
	}

	return `${day} ${month}`;
}


function timeConverter(unix) {
	const date = new Date(unix * 1000);

	let hour = String(date.getHours());
	if (hour.length === 1) {
		hour = 0 + hour;
	}
	let minute = String(date.getMinutes());
	if (minute.length === 1) {
		minute = 0 + minute;
	}

	return `${hour}: ${minute}`;
}