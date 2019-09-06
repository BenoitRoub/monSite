import React from "react";
import style from "./tinderLike.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TopButtonContainer from "./topButtonContainer";

const FullProfile = () => {
	const images = useSelector(state => state.swapApp.images);
	const imageNumber = useSelector(state => state.swapApp.imageNumber);
	const imagesInfo = useSelector(state => state.swapApp.imagesTable);

	const styleImage = {
		background: `center / cover url(${imagesInfo.hits[imageNumber].webformatURL})`,
		borderRadius: "0px"
	};

	const FullProfileContainer = {
		height: "400px",
		width: "285px",
		display: "flex",
		flexDirection: "column",
		background: "white",
		marginLeft: "-2px"
	};

	console.log(imagesInfo.hits[imageNumber]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}
		>
			<TopButtonContainer />
			<div style={FullProfileContainer}>
				<img style={styleImage} className={style.imageContainer}></img>
				<p
					style={{
						fontSize: "17px",
						fontWeight: "600",
						color: "#171717",
						marginTop: "10px",
						fontFamily: "Manjari, sans-serif"
					}}
				>
					{imagesInfo.hits[imageNumber].tags.split(",")[0]}
				</p>
				<div
					style={{
						fontFamily: "Manjari, sans-serif",
						color: "#3e3e3e",
						marginTop: "10px",
						lineHeight: "1.3em"
					}}
				>
					<p>{imagesInfo.hits[imageNumber].tags}</p>
					<p>Auteur : {imagesInfo.hits[imageNumber].user}</p>
				</div>
			</div>{" "}
		</div>
	);
};

export default FullProfile;
