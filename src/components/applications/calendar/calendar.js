import React from "react";
import style from "./calendar.module.css";
import Jour from "./jourCalendrier";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

const Calendar = () => {
	const dateActuel = new Date();
	const jourDateActuel = dateActuel.getDay();

	const selectedYear = useSelector(state => state.Calendar.selectedYear);
	const selectedMonth = useSelector(state => state.Calendar.selectedMonth);

	const getDaysInMonths = (month, year) => {
		return new Date(year, month, 0).getDate();
	};

	const getFirstDayInMonths = (month, year) => {
		return new Date(year, month, 0).getDay();
	};

	const newdate = getFirstDayInMonths(selectedMonth, selectedYear);

	var numéroJours = [];
	var n = 0;

	const dayInMonth = getDaysInMonths(selectedMonth, selectedYear);

	if (newdate === 0) {
		numéroJours = ["", "", "", "", "", ""];
	} else
		while (n < newdate) {
			n++;
			numéroJours[n] = "";
		}

	n = 0;

	while (n < dayInMonth) {
		n++;
		numéroJours[n + newdate] = n;
	}

	const months = [
		"janvier",
		"février",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"décembre"
	];

	const days = [
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
		"Dimanche"
	];

	const dispatch = useDispatch();

	const selectedDay = useSelector(state => state.Calendar.selectedDay);
	const selectedDate = useSelector(state => state.Calendar.selectedDate);

	const lastMonth = () => {
		dispatch({ type: "LASTMONTH", selectedMonth: selectedMonth });
	};

	const nextMonth = () => {
		dispatch({ type: "NEXTMONTH", selectedMonth: selectedMonth });
	};
	const styleContainer = {
		background: "white",
		height: 620,
		maxWidth: 600,
		boxShadow: "0 0 3px",
		borderRadius: "5px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: 20,
		overflow: "hidden"
	};

	return (
		<div className={style.div}>
			<Container maxWidth="sm" style={styleContainer}>
				<div className={style.containerMonth}>
					<IconButton onClick={lastMonth}>
						<i class="material-icons">skip_previous</i>
					</IconButton>
					<div
						style={{
							display: "flex",
							justifyContent: "space-around",
							width: 180,
							alignItems: "center",
							margin: 20
						}}
					>
						<p
							style={{
								fontFamily:
									"Roboto, Helvetica, Arial, sans-serif"
							}}
						>
							{months[selectedMonth]}
						</p>
						<p
							style={{
								fontFamily:
									"Roboto, Helvetica, Arial, sans-serif"
							}}
						>
							{selectedYear}
						</p>
					</div>
					<IconButton onClick={nextMonth}>
						<i class="material-icons">skip_next</i>
					</IconButton>
				</div>
				<ol className={style.dayNumberContainer}>
					{days.map(day => (
						<li className={style.texte}>{day}</li>
					))}
					{numéroJours.map(numéroJour =>
						numéroJour === dateActuel.getDate() ? (
							<Jour
								number={numéroJour}
								style={{
									background: "#3f51b5",
									color: "white"
								}}
							/>
						) : (
							<Jour number={numéroJour} />
						)
					)}
				</ol>
				<Container
					style={{
						display: "flex",
						justifyContent: "space-around",
						width: 300,
						alignItems: "center",
						margin: 20
					}}
				>
					<p
						style={{
							fontFamily: "Roboto, Helvetica, Arial, sans-serif"
						}}
					>
						{days[selectedDay]}
					</p>
					<p
						style={{
							fontFamily: "Roboto, Helvetica, Arial, sans-serif"
						}}
					>
						{selectedDate}
					</p>
					<p
						style={{
							fontFamily: "Roboto, Helvetica, Arial, sans-serif"
						}}
					>
						{months[selectedMonth]}
					</p>
				</Container>
			</Container>
		</div>
	);
};

export default Calendar;
