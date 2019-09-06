import React from "react";
import style from "./tinderLike.module.css";
import { useDispatch } from "react-redux";

const ButtonContainer = () => {
	const dispatch = useDispatch();

	const lastProfile = () => {
		dispatch({ type: "LASTPROFILE" });
	};

	const nextProfile = () => {
		dispatch({ type: "NEXTPROFILE" });
	};

	const like = () => {
		dispatch({ type: "LIKE" });
	};

	const likeButton = () => {
		like();
		nextProfile();
	};

	const superLike = () => {
		dispatch({ type: "SUPERLIKE" });
	};

	const superLikeButton = () => {
		superLike();
		nextProfile();
	};

	return (
		<div className={style.buttonContainer}>
			<button className={style.firstButton} onClick={lastProfile}>
				<div className={style.insideFirstButton}>
					<i
						class="fas fa-undo fa-lg"
						style={{ color: "#f3c827" }}
					></i>
				</div>
			</button>
			<button className={style.secondButton} onClick={nextProfile}>
				<div className={style.insideSecondButton}>
					<i
						class="fas fa-times fa-2x"
						style={{ color: "#e84d4d" }}
					></i>
				</div>
			</button>
			<button className={style.secondButton} onClick={likeButton}>
				<div className={style.insideSecondButton}>
					<i
						class="fas fa-heart fa-2x"
						style={{ color: "#45bf82" }}
					></i>
				</div>
			</button>
			<button className={style.firstButton} onClick={superLikeButton}>
				<div className={style.insideFirstButton}>
					<i
						class="fas fa-bolt fa-lg"
						style={{ color: "#5555f3" }}
					></i>
				</div>
			</button>
		</div>
	);
};

export default ButtonContainer;
