import { SERVER } from './Consts.jsx';
export { CreateWeatherForecastTab };

function CreateWeatherForecastTab({ list }) {
	return (
		<div className="weather-forecast main-tabs__block" id="tab_3">
			<h3 className="weather-title weather-forecast__title">
			</h3>
			<ul className="weather-forecast__list">
				{list.map((item, index) => <AddForecastElement item={item} index={index} key={index} />)}
			</ul>
		</div>
	)
}


function AddForecastElement({ index, item }) {
	return (
		<li key={index} className="main__hourly-item">
			<article className="card-weather">
				<div className="card-weather__top">
					<time className="card-weather__date">{item.date}</time>
					<time className="card-weather__date">{item.time}</time>
				</div>
				<div className="card-weather__bottom">
					<div className="card-weather__box">
						<span className="card-weather__temperature">Temperature: {item.temperature}°</span>
						<span className="card-weather__temperature">Feels like: {item.feelsLike}°</span>
					</div>
					<div className="card-weather__box" style={{ backgroundImage: `url(${SERVER.ICON}${item.icon}.png)` }} >
						<p className="Forecast__text"> {item.weather}</p>
					</div>
				</div>
			</article>
		</li>
	)
}