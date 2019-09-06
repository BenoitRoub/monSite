import React from "react";
import style from "./header.module.css";
import CategoriesButton from "./CategoriesButton";
import Log from ".././log/log";

const StaticHeader = () => {
	return (
		<div className={style.headerOnScroll}>
			<CategoriesButton />
			<p className={style.siteName}>Gomgom</p>
			<Log />
		</div>
	);
};

export default StaticHeader;
