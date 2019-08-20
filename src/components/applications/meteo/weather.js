import React from 'react';

const Weather = ({hour, temp, clouds, description}) => {

	const SetHour = ({hour}) => {
		var splithour = hour.split(' ');
		var realHour = splithour[1].split('');
		return (
			<p className="weatherDate">{realHour.slice(0,2)} H</p>
			)
	}

	const SetTemp = ({temp}) => {
		var temperature = Math.round(temp - 273)
		return (
			<p className="weatherTemp">{temperature} °C</p>
			)
	}
	
	return(
		<div className="weatherInfo">
			<SetHour
			hour={hour} />
			<SetTemp
				temp={temp} />
			<p className="weatherDescription">{description}</p>
		</div>
		)
};

export default Weather;