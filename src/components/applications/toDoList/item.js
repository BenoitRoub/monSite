import React from "react";
import { useDispatch } from "react-redux";
import style from "./toDoList.module.css";
import Checkbox from "@material-ui/core/Checkbox";

const Item = item => {
	const [state, setState] = React.useState(false);

	const handleChange = name => event => {
		setState({ ...state, [name]: !state.checkedA });
		console.log(state.checkedA);
	};

	const check = () => {
		setState(!state);
	};

	const dispatch = useDispatch();

	const toggleItem = () => {
		dispatch({ type: "TOGGLEITEM", key: item.text, status: item.status });
	};

	const onChecked = () => {
		check();
		// handleChange("checkedA");
		toggleItem();
	};

	if (item.status)
		return (
			<li className={style.item}>
				<p>{item.text}</p>

				<Checkbox
					checked={state}
					onChange={onChecked}
					value="checkedA"
					inputProps={{
						"aria-label": "primary checkbox"
					}}
				/>
			</li>
		);
	else if (!item.status)
		return (
			<li className={style.item}>
				<p className={style.toggled}>{item.text}</p>

				<Checkbox
					checked={state}
					onChange={onChecked}
					value="checkedA"
					inputProps={{
						"aria-label": "primary checkbox"
					}}
				/>
			</li>
		);
	else return null;
};

export default Item;
