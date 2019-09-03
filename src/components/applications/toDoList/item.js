import React from 'react';
import { useDispatch } from 'react-redux';
import style from './toDoList.module.css';

const Item = (item) => {

	const dispatch = useDispatch();

	const toggleItem = () => {
		dispatch({type: 'TOGGLEITEM', key: item.text, status: item.status})
	}


	if (item.status)
		return (
			<li className={style.item}>
			<p>{item.text}</p>
			<button onClick={toggleItem}
			className={style.buttonToggle}>V
			</button>
			</li>
			)
	else if (!item.status)
		return (
			<li className={style.item}> 
			<p className={style.toggled}>{item.text}
			</p>
			<button onClick={toggleItem}
			className={style.buttonToggle}>X
			</button>
			</li>
			)
	else return (null)

}

export default Item;