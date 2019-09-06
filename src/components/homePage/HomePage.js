import React from "react";
import Button from "@material-ui/core/Button";
import NavBar from ".././header/NavBar";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import "./ProjectsScreenshot.css";

export default function HomePage() {
	const styleContainerTop = {
		paddingTop: "20vh",
		height: "100vh",
		fontFamily: "Montserrat, sans-serif",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		textAlign: "center",
		alignItems: "center",
		color: "#3f51b5"
	};
	const buttonStyle = {
		width: "30%"
	};

	const projects = [
		{
			link: "/SwapApp",
			className: "classProjectSwapApp"
		},
		{
			link: "/ToDoList",
			className: "classProjectToDo"
		},
		{
			link: "/Calendar",
			className: "classProjectCalendar"
		},
		{
			link: "/Weather",
			className: "classProjectWeather"
		}
	];

	const styleContainerBot = {
		display: "flex",
		justifyContent: "center",
		paddingTop: 200,
		height: "100vh"
	};
	return (
		<React.Fragment>
			<NavBar />
			<Container maxWidth="sm" style={styleContainerTop}>
				<h1 style={{ fontWeight: "normal", fontSize: "2.2em" }}>
					DEVELOPPEUR REACT.JS
				</h1>
				<p style={{ fontFamily: "Montserrat, sans-serif" }}>
					Je m'appelle Benoit Roubaud, je suis passionn&eacute; de
					programmation et ai appris &agrave; coder en suivant des
					formations sur internet.
					<br />
					Ce site montre un aper&ccedil;u de mes capacit&eacute;s. Il
					a &eacute;t&eacute; d&eacute;velopp&eacute; uniquement en
					React.js / Redux, ainsi qu'en utilisant la librairie
					Material-ui. J'y poste de petits programmes que je
					cr&eacute;&eacute; pour m'entrainer ou afin de parfaire
					certaines connaissances. <br />
					<br />
				</p>
				<Button
					variant="outlined"
					color="primary"
					href="#projects"
					style={buttonStyle}
				>
					Voir mes projets
				</Button>
			</Container>
			<Container maxWidth="md" style={styleContainerBot}>
				<div id="projects" />
				{projects.map(project => (
					<Link to={project.link} className={project.className}>
						<div></div>
					</Link>
				))}
			</Container>
		</React.Fragment>
	);
}
