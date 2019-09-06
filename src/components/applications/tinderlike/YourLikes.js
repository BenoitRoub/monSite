import React from "react";
import style from "./tinderLike.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const YourLikes = () => {
	const images = useSelector(state => state.swapApp.images);
	const imagesInfo = useSelector(state => state.swapApp.imagesTable);

	const containerLiked = {
		width: "285px",
		height: "335px",
		marginTop: "10px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		overflow: "	hidden"
	};

	const containerSuperLiked = {
		width: "285px",
		height: "85px",
		display: "flex",
		alignItems: "center",
		overflow: "	hidden",
		flexDirection: "row",
		borderBottom: "1px solid #d2d2d2"
	};

	const containerProfileLiked = {
		height: "85px",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "start",
		overflow: "	hidden",
		flexShrink: "0"
	};

	var i = 0;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}
		>
			<div className={style.TopButtonContainer}>
				<Link to="/SwapApp" style={{ fontSize: "12px" }}>
					<i
						class="fas fa-long-arrow-alt-left fa-2x"
						style={{ color: "#a2a2a2", width: "50px" }}
					></i>
				</Link>
				<i
					class="fas fa-comments fa-2x"
					style={{ color: "#f75656" }}
				></i>
				<p style={{ width: "50px" }}></p>
			</div>
			<div style={containerSuperLiked}>
				{images.map(image => {
					if (image.superlike) {
						const photoStyle = {
							background: `center / cover url(${imagesInfo.hits[image.number].webformatURL})`,
							height: "75px",
							width: "75px",
							borderRadius: "50%",
							marginRight: "25px",
							flexShrink: "0"
						};

						return (
							<Link
								to={`/SwapApp/${imagesInfo.hits[image.number].tags}`}
								style={photoStyle}
							></Link>
						);
					} else i++;
					if (i === 19)
						return (
							<p
								style={{
									fontSize: "17px",
									fontWeight: "600",
									color: "#171717",
									marginTop: "-7px",
									fontFamily: "Manjari, sans-serif",
									marginLeft: "7px"
								}}
							>
								Pas de SuperLike
							</p>
						);
				})}
			</div>
			<div style={containerLiked}>
				{images.map(image => {
					if (image.status) {
						const photoStyle = {
							background: `center / cover url(${imagesInfo.hits[image.number].webformatURL})`,
							height: "75px",
							width: "75px",
							borderRadius: "50%",
							marginRight: "25px",
							flexShrink: "0"
						};

						return (
							<Link
								to={`/SwapApp/${imagesInfo.hits[image.number].tags}`}
								style={containerProfileLiked}
							>
								<div style={photoStyle}></div>
								<p
									style={{
										fontSize: "15px",
										color: "#4e4e4e",
										fontFamily: "Manjari, sans-serif"
									}}
								>
									{imagesInfo.hits[image.number].tags}
								</p>
							</Link>
						);
					}
				})}
			</div>
		</div>
	);
};

export default YourLikes;
