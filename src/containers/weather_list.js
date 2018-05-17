import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather_chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67); // converted K to F
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord; // ES6 to pull lon and lat properties from coord and make new variables


		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><WeatherChart data={temps} color="orange" units="F"/></td>
				<td><WeatherChart data={pressures} color="blue" units="hPa"/></td>
				<td><WeatherChart data={humidities} color="green" units="%"/></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// Gives us access to this.props.weather (we set weather in our rootReducer)
function mapStateToProps(state) { // instead of (state) it could be ({ weather })
	return { weather: state.weather }; // and this would return { weather };
}

export default connect(mapStateToProps)(WeatherList);
