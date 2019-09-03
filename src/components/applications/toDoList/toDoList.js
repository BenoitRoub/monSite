import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './toDoList.module.css';
import Item from './item'

const ToDoList = () => {

	const dispatch = useDispatch();

	const addItem = (e, item) => {
		e.preventDefault();
		dispatch({type: 'ADDITEM', item: item});
		setItem('');
	}

	const [item, setItem] = useState('');

	const updateNameItem = e => {
		setItem(e.target.value);
	}

	const removeItem = (e) => {
		dispatch({type : 'REMOVEITEM'})
	}
	const status = useSelector((state) => state.statusApplications.statusToDoList)


	 const close = () => {
	    dispatch({type: 'SWITCHTODOLIST'})
	  }


    const items = useSelector((state) => state.ToDoList.items)

	if (status)
		return (
			<div className={style.container} id="todolist">
					<div className={style.logoClose}
						onClick={close}></div>
					<p className= {style.title}>To Do List</p>
					<form onSubmit={ (e) => {
						addItem(e, item)}}
					className={style.form}>
						<input value={item}
						type="text"				
				        onChange={updateNameItem}
						placeholder=" add your item"
						className={style.input}/>
						<button
				          onSubmit={ (e) => {
							addItem(e, item)}}
				          className={style.buttonSearch}
				          type="submit">
				          Add Item
				        </button>
				    </form>
				    <div className={style.itemWrap}>
						{ items.map(item => (
							<Item 
							key={item.text}
							text={item.text}
							status={item.status}
							/>))
						}
					</div>
				    <button 
				    className={style.buttonRemove}
				    onClick={removeItem}>Remove Toggled Item
					</button>
			</div>
		)
	else return (null)
}

export default ToDoList;