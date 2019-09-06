import React from "react";
import style from "./tinderLike.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TopButtonContainer = () => {
	return (
		<div className={style.TopButtonContainer}>
			<Link to="/SwappApp/Settings">
				<i class="fas fa-cog fa-2x" style={{ color: "#a7a7a7" }}></i>
			</Link>
			<Link to="/SwapApp">
				<p
					style={{
						fontFamily: "Concert One, cursive",
						fontSize: "23px",
						color: "#f75656",
						fontWeight: "800"
					}}
				>
					Groot
				</p>
			</Link>
			<Link to="/SwapApp/YourLikes">
				<i
					class="fas fa-comments fa-2x"
					style={{ color: "#a7a7a7" }}
				></i>
			</Link>
		</div>
	);
};

export default TopButtonContainer;
