import React from 'react';
import style from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';


const CategoriesButton = () => {

	const dispatch = useDispatch();

	const statusHeader = useSelector((state) => state.headerStatus.headerStatus);

	const showCategories = () => {
		dispatch({type:'SHOWCATEGORIES'})
	}

	const closeHeader = () => {
		dispatch({type:'CLOSECATEGORIES'})
	}

	if (statusHeader === 'showHeader')
		return (
			<div className={style.menuCategories} onClick={showCategories}>
				<div className={style.logoCategories}>
				</div>
			</div>
			)
	else if (statusHeader === 'showScrollHeader')
		return (
			<div className={style.menuCategories} onClick={showCategories}>
				<div className={style.logoCategories}>
				</div>
			</div>
			)
	else if (statusHeader === 'showCategories')
		return (
			<div className={style.menuCategories} onClick={closeHeader}>
				<div className={style.logoClose}>
				</div>
			</div>
		)
	else return (<div className={style.menuCategories} onClick={showCategories}>
						<div className={style.logoCategories}>
						</div>
					</div>)
}

export default CategoriesButton;