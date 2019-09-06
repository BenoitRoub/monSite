import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import DrawersLeft from "../.././globalComponents/DrawersLeft";
import Contact from ".././contact/Contact";
import { Link } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar(props) {
  const styleNavBar = {
    display: "flex",
    justifyContent: "space-between"
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar style={styleNavBar}>
            <DrawersLeft />
            <Link
              to="/"
              style={{
                fontFamily: "Hepta Slab, serif",
                fontSize: "1.6em",
                color: "white"
              }}
            >
              Gomgom
            </Link>
            <Contact />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
