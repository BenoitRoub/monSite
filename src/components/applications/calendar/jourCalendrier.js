import React from 'react';
import style from './calendar.module.css';
import {useDispatch} from 'react-redux';

const Jour = (jour) => {

	const dispatch= useDispatch()

	const displayDay = () => {
		dispatch({type: 'DISPLAYDAY', dayNumber: jour.number})
	}

	return (
		<li className={style.li}>
			<button 
			className={style.jourButton}
			onClick={displayDay}>
			{jour.number}
			</button>
		</li>)
}

export default Jour;