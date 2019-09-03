import React from 'react';
import style from './calendar.module.css';
import Jour from './jourCalendrier';
import { useDispatch, useSelector} from 'react-redux';


const Calendar = () => {

	const dateActuel = new Date()
	const jourDateActuel = dateActuel.getDay()


	const selectedYear = useSelector((state) => state.Calendar.selectedYear)
	const selectedMonth = useSelector((state) => state.Calendar.selectedMonth)

	


		const getDaysInMonths = (month, year) => {
			return new Date(year, month, 0).getDate();
		}

		const getFirstDayInMonths = (month, year) => {
			return new Date(year, month, 0).getDay();
		}

		const newdate = getFirstDayInMonths(selectedMonth, selectedYear)

		var numéroJours = [];
		var n = 0;

		const dayInMonth = getDaysInMonths(selectedMonth, selectedYear);


		if (newdate === 0) {
			numéroJours= ['','','','','','']
		}
		else while (n < newdate){
			n++;
			numéroJours[n]=""
		}

		n = 0;

		while (n < (dayInMonth)) {
			n++;
			numéroJours[n+newdate]= n
		}

	const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
					'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

	const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

	const dispatch = useDispatch();

	const selectedDay = useSelector((state) => state.Calendar.selectedDay)
	const selectedDate = useSelector((state) => state.Calendar.selectedDate)

	const lastMonth = () => {
		dispatch({type: 'LASTMONTH', selectedMonth: selectedMonth})
	}

	const nextMonth = () => {
		dispatch({type: 'NEXTMONTH', selectedMonth: selectedMonth})
	}

	const status = useSelector((state) => state.statusApplications.statusCalendar)

	const close = () => {
	    dispatch({type: 'SWITCHCALENDAR'})
	  }

	if (status)
		return (
			<div className={style.div} id="calendar">
				<div className={style.logoClose}
						onClick={close}></div>
				<p>Calendrier</p>
				<p>{selectedYear}</p>
				<div className={style.containerMonth}>
					<button onClick={lastMonth}>-</button>
					<p>{months[selectedMonth]}</p>
					<button onClick={nextMonth}>+</button>
				</div>
				<ol className={style.dayNumberContainer}>
				{ days.map(day => (				
					<li className={style.texte}>{day}</li>
					))}
				{ numéroJours.map(numéroJour => (
					<Jour
					number={numéroJour}
					 />))}
				</ol>
				<p>{days[selectedDay]}</p> 
				<p>{selectedDate}</p>
				<p>{months[selectedMonth]}</p>
			</div>)
	else return (null)

}

export default Calendar;