import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    padding: "8px 50px",
    display: "flex",
    justifyContent: "space-between"
  },
  leftIcon: {
    marginLeft: "-10px"
  },
  input: {
    display: "none"
  }
}));

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        style={props.style}
        alternative="text"
        fullWidth="true"
        className={classes.button}
      >
        <div className={classes.leftIcon}>{props.icon}</div> {props.label}
      </Button>
    </div>
  );
}
