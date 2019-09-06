import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import style from "./toDoList.module.css";
import Item from "./item";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const ToDoList = () => {
	const useStyles = makeStyles(theme => ({
		fab: {
			margin: theme.spacing(1)
		},
		extendedIcon: {
			marginRight: theme.spacing(1)
		}
	}));

	const dispatch = useDispatch();

	const addItem = (e, item) => {
		e.preventDefault();
		dispatch({ type: "ADDITEM", item: item });
		setItem("");
	};

	const [item, setItem] = useState("");

	const updateNameItem = e => {
		setItem(e.target.value);
		console.log(item);
	};

	const removeItem = e => {
		dispatch({ type: "REMOVEITEM" });
	};

	const items = useSelector(state => state.ToDoList.items);

	const styleContainer = {
		background: "white",
		height: 500,
		maxWidth: 350,
		boxShadow: "0 0 3px",
		borderRadius: "5px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
		overflow: "hidden"
	};

	const styleItemContainer = { height: 300 };
	const classes = useStyles();
	return (
		<div className={style.container}>
			<Container maxWidth="sm" style={styleContainer}>
				<p
					style={{
						fontFamily: "Hepta Slab, serif",
						fontSize: "1.6em",
						color: "black"
					}}
				>
					To Do List
				</p>
				<form
					onSubmit={e => {
						addItem(e, item);
					}}
					style={{ display: "flex" }}
				>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Thing to do"
						type="text"
						value={item}
						onChange={updateNameItem}
					/>
					<Fab
						type="submit"
						color="primary"
						aria-label="add"
						className={classes.fab}
					>
						<AddIcon />
					</Fab>
					<Fab
						onClick={removeItem}
						color="secondary"
						aria-label="delete"
						className={classes.fab}
					>
						<i class="material-icons">delete</i>
					</Fab>
				</form>
				<div style={styleItemContainer}>
					{items.map(item => (
						<Item
							key={item.text}
							text={item.text}
							status={item.status}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default ToDoList;
