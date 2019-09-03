import React from 'react';
import style from './meteo.module.css';

const Weather = ({hour, temp, clouds, description}) => {

	const SetHour = ({hour}) => {
		var splithour = hour.split(' ');
		var realHour = splithour[1].split('');
		return (
			<p className={style.weatherDate}>{realHour.slice(0,2)} H</p>
			)
	}

	const SetTemp = ({temp}) => {
		var temperature = Math.round(temp - 273)
		return (
			<p className={style.weatherTemp}>{temperature} °C</p>
			)
	}
	
	return(
		<div className={style.weatherInfo}>
			<SetHour
			hour={hour} />
			<SetTemp
				temp={temp} />
			<p className={style.weatherDescription}>{description}</p>
		</div>
		)
};

export default Weather;