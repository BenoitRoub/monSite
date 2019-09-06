import React from "react";
import style from "./tinderLike.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonContainer from "./buttonContainer";

const ProfileContainer = () => {
	const imageNumber = useSelector(state => state.swapApp.imageNumber);
	const imagesInfo = useSelector(state => state.swapApp.imagesTable);

	const styleImage = {
		background: `center / cover url(${imagesInfo.hits[imageNumber].webformatURL})`
	};

	return (
		<div>
			<Link to={`/SwapApp/${imagesInfo.hits[imageNumber].tags}`}>
				<div className={style.profileBehind2}></div>
				<div className={style.profileBehind}></div>
				<div className={style.profileContainer}>
					<img
						style={styleImage}
						className={style.imageContainer}
					></img>
					<p
						style={{
							fontSize: "17px",
							fontWeight: "600",
							color: "#171717",
							marginTop: "4px",
							fontFamily: "Manjari, sans-serif",
							marginLeft: "7px"
						}}
					>
						{imagesInfo.hits[imageNumber].tags.split(",")[0]}
					</p>
				</div>
			</Link>
			<ButtonContainer />
		</div>
	);
};

export default ProfileContainer;
