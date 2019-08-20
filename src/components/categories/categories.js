import React from 'react';
import style from './categories.module.css';
import style2 from '.././header/header.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {useSpring, useTransition, animated} from 'react-spring';
import Header from '.././header/header';
import CategoriesButton from '.././header/buttonCategories';
import Log from '.././log/log';

const CategoriesMenu = () => {

	const dispatch = useDispatch()
	const statusHeader = useSelector((state) => state.headerStatus.headerStatus);

	const closeCategories = () => {
		dispatch({type:'CLOSECATEGORIES'})
	}

	const switchMeteo = () => {
		dispatch({type: 'DISPLAYMETEO'})
	}
 
	const transitions = useTransition(statusHeader, null, {
			from: { position: "fixed",
					top:-143,
					left:0,
					width: "100%",
					height: 143,
					background:  "rgba(275,275,275,1)",
					color: "rgba(#1d1d1d)",
					zIndex: 1, },
			enter: { position: "fixed",
					top:0,
					left: 0,
					width: "100%",
					height: 143,
					background: "rgba(275,275,275, 1)",
					color: "rgba(#1d1d1d)",
					zIndex: 1, },
			leave: { position: "fixed",
			 		top:-143,
			 		left: 0,
			 		width: "100%",
			 		height: 143,	
			 		background:  "rgba(275,275,275,1)",
			 		color: "rgba(#1d1d1d)",
			 		zIndex: 1, },
			})

	return (
		transitions.map(({ item, key, props }) =>
		item = 'showCategories' && <animated.div key={key} style={props}>
						<div className={style2.headerSwitched}>
							<CategoriesButton />
							<p className={style2.siteName}>siteName</p>
							<Log />
						</div>
						<div  className={style.listCategories}>
							<a onClick={switchMeteo} href="#meteo">Météo</a>
							<a>acheteurMalin</a>
							<a>troisièmeProjet</a>
							<a>quatrièmeProjet</a>
						</div>
				</animated.div>
		))

}

export default CategoriesMenu;