import React from 'react';
import style from './header.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {useSpring, useTransition, animated} from 'react-spring';
import CategoriesButton from './buttonCategories';
import Log from '.././log/log';

const ScrollHeader = () => {

	const dispatch = useDispatch()
	const statusHeader = useSelector((state) => state.headerStatus.headerStatus);

	const transitions = useTransition(statusHeader, null, {
			from: { position: "fixed",
					top:-63,
					left:0,
					width: "100%",
					height: 63,
					background:  "rgba(275,275,275,1)",
					color: "#1d1d1d",
					zIndex: 1, },
			enter: { position: "fixed",
					top:0,
					left: 0,
					width: "100%",
					height: 63,
					background: "rgba(275,275,275, 1)",
					color: "#1d1d1d",
					zIndex: 1, },
			leave: { position: "fixed",
			 		top:-63,
			 		left: 0,
			 		width: "100%",
			 		height: 63,	
			 		background:  "rgba(275,275,275,1)",
			 		color: "#1d1d1d",
			 		zIndex: 1, },
			})

	return (
		transitions.map(({ item, key, props }) =>
		item = 'showScrollCategories' && <animated.div key={key} style={props}>
						<div className={style.headerOnScroll}>
							<CategoriesButton />
							<p className={style.siteName}>siteName</p>
							<Log />
						</div>
				</animated.div>
		))

}

export default ScrollHeader;