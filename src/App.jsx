import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SERVER, DEFOULT_CITY_OBJECT } from './Consts.jsx';
import { dateConverter, timeConverter, getWeather } from './functions.js';
import { CreateForm } from './Form.jsx';
import { CreateWeatherNowTab } from './WeatherNowTab.jsx';
import { CreateWeatherDetailsTab } from './WeatherDetailsTab.jsx';
import { CreateWeatherForecastTab } from './WeatherForecastTab.jsx';
import { CreateMainTabs } from './MainTabs.jsx';
import { CreateSavedCityElement } from './SavedCityElement.jsx';
import { setCurrentCity } from './Redux/redusersRTK';



function App() {

  const dispatch = useDispatch();

  const [cityNowInfo, setNowInfo] = useState(DEFOULT_CITY_OBJECT);

  const [cityForecastInfo, setForecastInfo] = useState([]);

  const savedCurrentCity = useSelector(state => state.weather.currentCity);
  const savedCityList = useSelector(state => state.weather.savedCities);


  const addNowInfo = json => {
    const newObject = {
      temperatureFirstTab: Math.round(json.main.temp - 273.16) + '°',
      imgFirstTab: `${SERVER.ICON}${json.weather[0].icon}.png`,
      titleFirstTab: json.name,
      Temperature: Math.round(json.main.temp - 273.16) + '°',
      Feels_like: Math.round(json.main.feels_like - 273.16) + '°',
      Weather: json.weather[0].main,
      Sunrise: (new Date(json.sys.sunrise * 1000)).toLocaleTimeString().substring(0, 5),
      Sunset: (new Date(json.sys.sunset * 1000)).toLocaleTimeString().substring(0, 5),
    };
    setNowInfo(newObject);
    dispatch(setCurrentCity(newObject.titleFirstTab));

  };


  const addForecastList = data => {
    const forecastList = [];
    for (let i = 0; i < data.list.length; i++) {
      const forecastObject = {
        date: dateConverter(data.list[i].dt),
        time: timeConverter(data.list[i].dt),
        temperature: Math.round(data.list[i].main.temp - 273.16),
        feelsLike: Math.round(data.list[i].main.feels_like - 273.16),
        icon: data.list[i].weather[0].icon,
        weather: data.list[i].weather[0].descrizption,
      }
      forecastList.push(forecastObject);
    }
    setForecastInfo(forecastList);
  };


  window.onload = function () {
    getWeather(savedCurrentCity, addNowInfo, addForecastList);
  };


  return (
    <div className="container">
      <CreateForm addNowInfo={addNowInfo} addForecastList={addForecastList} />
      <div className="main-box">
        <div className="main-box__left">
          <div className="main-tabs__body">
            <CreateWeatherNowTab cityNowInfo={cityNowInfo} savedCityList={savedCityList} />
            <CreateWeatherDetailsTab cityNowInfo={cityNowInfo} />
            <CreateWeatherForecastTab list={cityForecastInfo} />
          </div>
          <CreateMainTabs />
        </div>
        <div className="main-box__right">
          <h2 className="main-box__right-title">
            Added Locations:
          </h2>
          <ul className="city-list">
            {savedCityList.map((item, index) => <CreateSavedCityElement City_Name={item}
              key={index} index={index} addNowInfo={addNowInfo} addForecastList={addForecastList} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
