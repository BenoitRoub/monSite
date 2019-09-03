import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import style from './log.module.css';

const Log = () => {

	
	const Username = useSelector((state) => state.logInfo.username);
	const login = useSelector((state) => state.login.login);
	
	const dispatch = useDispatch();

	const change = () => {
		dispatch({type:'CHANGE'})
	}

	const deconnect = () => {
		dispatch({type:'DECONNECT'})
	}



	if (Username !== "")
		 return (
			<div className={style.wrapHeader}>
				<div className={style.headerRight}>
					<p className="{style.hover} {style.username}">{Username}</p>
					<p className="{style.hover} {style.logout}"
					onClick={change, deconnect}>Logout</p>
				</div>
			</div>
			)
	else if (login === true)
			return (<div className={style.wrapHeader}>
						<p></p>
					</div>) 
		else return (
			<div className={style.wrapHeader}>
				<div >
					<p className={style.hover}
					onClick={change}>Login</p>
				</div>
			</div>
			)
}

export default Log;
