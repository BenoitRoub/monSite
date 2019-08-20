import React from 'react';
import style from './categories.module.css';
import { useDispatch } from 'react-redux';

const BarLateralCategories = () => {

	const dispatch = useDispatch();

	const setUpCategories = () => {
		dispatch({type:'CHANGECATEGORIES'})
	}

	return (
		<div className={style.hideCategories} onMouseOver={setUpCategories}>
			<div className={style.logoCategories}>
			</div>
		</div>
		)
}

export default BarLateralCategories;