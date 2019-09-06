import React from "react";
import style from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";

const CategoriesButton = () => {
	const dispatch = useDispatch();

	const statusHeader = useSelector(state => state.headerStatus.headerStatus);

	const showCategories = () => {
		dispatch({ type: "SHOWCATEGORIES" });
	};

	const closeHeader = () => {
		dispatch({ type: "CLOSECATEGORIES" });
	};

	if (statusHeader === "showHeader")
		return (
			<i
				class="fas fa-bars fa-2x"
				style={{ marginLeft: "20px", width: "50px" }}
				onClick={showCategories}
			></i>
		);
	else if (statusHeader === "showScrollHeader")
		return (
			<i
				class="fas fa-bars fa-2x"
				style={{ marginLeft: "20px", color: "black", width: "50px" }}
				onClick={showCategories}
			></i>
		);
	else if (statusHeader === "showCategories")
		return (
			<i
				class="fas fa-times fa-2x"
				style={{ marginLeft: "20px", color: "black", width: "50px" }}
				onClick={closeHeader}
			></i>
		);
	else
		return (
			<i
				class="fas fa-bars fa-2x"
				style={{ marginLeft: "20px", width: "50px" }}
				onClick={showCategories}
			></i>
		);
};

export default CategoriesButton;
