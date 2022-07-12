export { CreateWeatherDetailsTab };


function CreateWeatherDetailsTab({ cityNowInfo }) {
	return (
		<div className="weather-details main-tabs__block" id="tab_2">
			<h3 className="weather-title weather-details__title"></h3>
			<ul className="weather-detail__list">
				<li className="weather-detail__list-item">
					Temperature: {cityNowInfo.Temperature}
				</li>
				<li className="weather-detail__list-item">
					Feels like: {cityNowInfo.Feels_like}
				</li>
				<li className="weather-detail__list-item">
					Weather: {cityNowInfo.Weather}
				</li>
				<li className="weather-detail__list-item">
					Sunrise: {cityNowInfo.Sunrise}
				</li>
				<li className="weather-detail__list-item">
					Sunset: {cityNowInfo.Sunset}
				</li>
			</ul>
		</div>
	)
}