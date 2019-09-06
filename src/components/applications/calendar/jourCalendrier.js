import React from "react";
import style from "./calendar.module.css";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

const Jour = jour => {
	const dispatch = useDispatch();

	const displayDay = () => {
		dispatch({ type: "DISPLAYDAY", dayNumber: jour.number });
	};

	return (
		<li className={style.li}>
			<Button
				style={jour.style}
				className={style.jourButton}
				onClick={displayDay}
			>
				{jour.number}
			</Button>
		</li>
	);
};

export default Jour;
