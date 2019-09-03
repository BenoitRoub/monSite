import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import style from './header.module.css';
import Log from '.././log/log';
import CategoriesButton from './buttonCategories';
import CategoriesMenu from '.././categories/categories';
import ScrollHeader from './scrollHeader';


const Header = () => {

	const dispatch = useDispatch()
	const statusHeader = useSelector((state) => state.headerStatus.headerStatus);	

	useEffect(() => {
		window.addEventListener('scroll', handleOnScroll)
		if (window.matchMedia("(max-width:700px)").matches)
			dispatch({type: 'SHOWSCROLLHEADER'});
	}, [] );

	var lastYScrolle=0;

	const handleOnScroll = event => {
		event.preventDefault();
		const yScroll = window.scrollY;
		if ( yScroll < 63 )
			dispatch({type: 'SHOWHEADER'})
		else if ( yScroll < 200 )
			dispatch({type: 'SHOWSCROLLHEADER'})
		else if ( yScroll < lastYScrolle )
			dispatch({type: 'SHOWSCROLLHEADER'});
		else if ( yScroll > lastYScrolle )
			dispatch({type: 'CLOSEALLHEADER'});
		lastYScrolle=yScroll;
	}






	if (statusHeader === 'showHeader')
		return(
			<div className={style.header}>
				<CategoriesButton />
				<p className={style.siteName}>Gomgom</p>
				<Log />
			</div>
			);
	else if (statusHeader === 'showScrollHeader')
		return(
			<ScrollHeader />
			);
	else if (statusHeader === 'showCategories')
		return(
			<CategoriesMenu />
			);
	else if (statusHeader === 'closeAllHeader')
		return (null);
	else return(null);
}

export default Header;
