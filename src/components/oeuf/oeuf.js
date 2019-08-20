import React from 'react';
import style from './oeuf.module.css';
import {useSpring, animated} from 'react-spring';
import { useDispatch, useSelector} from 'react-redux';
import Applications from './applications.js';


const Oeuf = () => {

	const applicationsAreNotDisplay = useSelector((state) => state.statusApplications.status)

	const dispatch = useDispatch();

	const swicthApplications = () => {
		dispatch({type: 'SWITCHAPPLICATIONS'})
		console.log (applicationsAreNotDisplay)
	}
	

	return (
		<div className={style.oeufContainer}>
			<div className={style.oeufStyle}
				onClick={swicthApplications}>
			{ applicationsAreNotDisplay ? false : <div className={style.plusIcon}></div> }
			{ !applicationsAreNotDisplay ? true : <div className={style.moinsIcon}></div> }
			</div>
			<Applications />
		</div>
		)
}

export default Oeuf;