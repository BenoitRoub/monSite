import React from "react";
import style from ".././components/header/header.module.css";
import CategoriesButton from ".././components/header/CategoriesButton";
import Log from ".././components/log/log";
import DrawersLeft from "./DrawersLeft";

const HeaderApplications = () => {
	return (
		<div className={style.headerOnScroll}>
			<DrawersLeft />
			<Log />
		</div>
	);
};

export default HeaderApplications;
