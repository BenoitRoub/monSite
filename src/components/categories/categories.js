import React from "react";
import style from "./categories.module.css";
import style2 from ".././header/header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useTransition, animated } from "react-spring";
import CategoriesButton from ".././header/CategoriesButton";
import Log from ".././log/log";
import { Link } from "react-router-dom";

const CategoriesMenu = () => {
	const dispatch = useDispatch();
	const statusHeader = useSelector(state => state.headerStatus.headerStatus);

	const transitions = useTransition(statusHeader, null, {
		from: {
			position: "fixed",
			top: -143,
			left: 0,
			width: "100%",
			height: 143,
			background: "rgba(275,275,275,1)",
			color: "rgba(#1d1d1d)",
			zIndex: 1
		},
		enter: {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: 143,
			background: "rgba(275,275,275, 1)",
			color: "rgba(#1d1d1d)",
			zIndex: 1
		},
		leave: {
			position: "fixed",
			top: -143,
			left: 0,
			width: "100%",
			height: 143,
			background: "rgba(275,275,275,1)",
			color: "rgba(#1d1d1d)",
			zIndex: 1
		}
	});

	return transitions.map(
		({ item, key, props }) =>
			(item = "showCategories" && (
				<animated.div key={key} style={props}>
					<div className={style2.headerSwitched}>
						<CategoriesButton />
						<p className={style2.siteName}>Gomgom</p>
						<Log />
					</div>
					<div className={style.listCategories}>
						<Link to="/SwapApp">SwapApp</Link>
						<Link to="/ToDoList">To Do List</Link>
						<Link to="/Calendar">Calendrier</Link>
						<Link to="/Meteo">Météo</Link>
					</div>
				</animated.div>
			))
	);
};

export default CategoriesMenu;
