import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./components/header/header";
import StaticHeader from "./components/header/staticHeader";
import LogForm from "./components/log/logForm";
import PresentationText from "./components/presentationText/presentationText";
import Oeuf from "./components/oeuf/oeuf";
import Weather from "./components/applications/meteo/meteo";
import ToDoList from "./components/applications/toDoList/toDoList";
import Calendar from "./components/applications/calendar/calendar";
import SwapApp from "./components/applications/tinderlike/tinderLike";
import orange from "@material-ui/core/colors/orange";
import amber from "@material-ui/core/colors/amber";
import yellow from "@material-ui/core/colors/yellow";
import NavBar from "./components/header/NavBar";
import HomePage from "./components/homePage/HomePage";

const App = () => {
  const backgroundStyle = {
    background: "#feccb1" /* Old browsers */,
    background:
      "-moz-linear-gradient(-45deg, #feccb1 0%, #f17432 40%, #f17432 46%, #f17432 46%, #ea5507 70%, #fb955e 100%)" /* FF3.6-15 */,
    background:
      "-webkit-linear-gradient(-45deg, #feccb1 0%,#f17432 40%,#f17432 46%,#f17432 46%,#ea5507 70%,#fb955e 100%)" /* Chrome10-25,Safari5.1-6 */,
    background:
      "linear-gradient(135deg, #feccb1 0%,#f17432 40%,#f17432 46%,#f17432 46%,#ea5507 70%,#fb955e 100%)" /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
    filter:
      "progidDXImageTransform.Microsoft.gradient( startColorstr='#feccb1', endColorstr='#fb955e',GradientType=1 )" /* IE6-9 fallback on horizontal gradient */
  };

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/:all" component={NavBar} />
        <Route path="/LoginForm" component={LogForm} />
        <Route path="/SwapApp" component={SwapApp} />
        <Route path="/ToDoList" component={ToDoList} />
        <Route path="/Calendar" component={Calendar} />
        <Route path="/Weather" component={Weather} />
      </div>
    </Router>
  );
};

export default App;
