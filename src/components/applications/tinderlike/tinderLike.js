import React, { useEffect } from "react";
import style from "./tinderLike.module.css";
import ProfileContainer from "./profileContainer";
import ButtonContainer from "./buttonContainer";
import TopButtonContainer from "./topButtonContainer";
import FullProfile from "./FullProfile";
import YourLikes from "./YourLikes";
import Settings from "./Settings";
import HeaderApplications from "../../.././globalComponents/HeaderApplications";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SwappApp = () => {
	const APIKEY = "13338246-5727ee46054fc528220bfb343";
	const dispatch = useDispatch();
	const reload = useSelector(state => state.swapApp.reload);

	const getImages = async () => {
		const response = await fetch(
			"https://pixabay.com/api/?key=13338246-5727ee46054fc528220bfb343&q=yellow+flowers&image_type=photo"
			// `https://pixabay.com/api/?key=${APIKEY}$q=house`
		);
		const imagesFetch = await response.json();
		dispatch({ type: "SETIMAGES", imagesFetch: imagesFetch });
	};

	useEffect(() => {
		getImages();
	}, [reload]);

	return (
		<Router>
			<HeaderApplications />
			<div className={style.div}>
				<div className={style.container}>
					<Route
						exact
						path="/SwapApp"
						component={TopButtonContainer}
					/>
					<Switch>
						<Route
							exact
							path="/SwapApp"
							component={ProfileContainer}
						/>
						<Route
							path="/SwapApp/YourLikes"
							component={YourLikes}
						/>
						<Route path="/SwappApp/Settings" component={Settings} />
						<Route
							exact
							path="/SwapApp/:number"
							component={FullProfile}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default SwappApp;
