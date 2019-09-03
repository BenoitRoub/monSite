import React from 'react';
import style from './oeuf.module.css';
import { useDispatch, useSelector} from 'react-redux';
import Applications from './applications.js';


const Oeuf = () => {

	const applicationsAreNotDisplay = useSelector((state) => state.statusApplications.status)

	const dispatch = useDispatch();

	const switchToDo = () => {
		dispatch({type: 'SWITCHTODOLIST'})
	}
	const switchMeteo = () => {
		dispatch({type: 'SWITCHMETEO'})
	}
	const switchCalendar = () => {
		dispatch({type: 'SWITCHCALENDAR'})
	}
	

	return (
		<div className={style.appliContainer}>
			<div className={style.allAppli} >
			<div className={style.appliHaute}>
				<div className={style.appliStatic}>
					<div
					onClick={switchMeteo}
					class={style.appliGaucheHaute}></div>
				</div>
				<div className={style.appliStatic}>
					<div 
					onClick={switchToDo}
					class={style.appliDroiteHaute}></div>
				</div>
			</div>
			<div className={style.appliHaute}>
				<div className={style.appliStatic}>
					<div 
					onClick={switchCalendar}
					class={style.appliGaucheBasse}></div>
				</div>
				<div className={style.appliStatic}>
					<div class={style.appliDroiteBasse}></div>
				</div>
			</div>
			</div>
		</div>
		)
}

export default Oeuf;