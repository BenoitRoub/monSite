import React from "react";
import style from "./meteo.module.css";

const WeatherInfo = ({ hour, temp, clouds, description, icon }) => {
	const SetHour = ({ hour }) => {
		var splithour = hour.split(" ");
		var realHour = splithour[1].split("");
		return <p className={style.weatherDate}>{realHour.slice(0, 2)} H</p>;
	};

	const SetTemp = ({ temp }) => {
		var temperature = Math.round(temp - 273);
		return <p className={style.weatherTemp}>{temperature} °C</p>;
	};

	const SetIcon = ({ icon }) => {
		if (icon === "clear sky") return <i class="material-icons">wb_sunny</i>;
		else if (
			icon === "few clouds" ||
			icon === "scattered clouds" ||
			icon === "broken clouds"
		)
			return <i class="material-icons">wb_cloudy</i>;
		else if (icon === "shower rain" || icon === "rain")
			return <i class="fas fa-cloud-rain"></i>;
		else if (icon === "thunderstorm") return <i class="fas fa-bolt"></i>;
		else return <i class="material-icons">wb_sunny</i>;
	};

	return (
		<div className={style.weatherInfo}>
			<SetHour hour={hour} />
			<SetTemp temp={temp} />
			<SetIcon icon={icon} />
		</div>
	);
};

export default WeatherInfo;
