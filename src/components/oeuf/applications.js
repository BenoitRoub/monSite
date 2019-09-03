import React from 'react';
import { useSelector } from 'react-redux';
import './applications.css';
import MeteoIcon from './meteo';
import ToDoListIcon from './ToDoListIcon';
import CalendarIcon from './CalendarIcon';

const Applications = () => {

	const status = useSelector((state) => state.statusApplications.status)


	if (status)
		return (
			<div >
				<MeteoIcon
				status={status} />
				<ToDoListIcon 
				status= {status} />
				<CalendarIcon
				status= {status} />
				<p class="appContainer fourth"
				>
				four</p>
			</div>
			)
	else return (null)
}

export default Applications;