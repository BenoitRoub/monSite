import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function DrawersLeft() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const StyleButton = {
    width: "100%",
    margin: 0
  };

  const NavItem = [
    { text: "Home", icon: <i class="material-icons">home</i>, link: "/" },
    {
      text: "SwappApp",
      icon: <i class="material-icons">swap_horiz</i>,
      link: "/SwapApp"
    },
    {
      text: "ToDoList",
      icon: <i class="material-icons">format_list_numbered</i>,
      link: "/ToDoList"
    },
    {
      text: "Calendar",
      icon: <i class="material-icons">calendar_today</i>,
      link: "/Calendar"
    },
    {
      text: "Weather",
      icon: <i class="material-icons">cloud</i>,
      link: "/Weather"
    }
  ];

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {NavItem.map((item, index) => (
        <Link exact to={item.link}>
          <Buttons label={item.text} icon={item.icon}></Buttons>
        </Link>
      ))}

      <Divider />
    </div>
  );

  return (
    <div>
      <i
        class="fas fa-bars fa-2x"
        style={{ width: "40px" }}
        onClick={toggleDrawer("left", true)}
      />
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
