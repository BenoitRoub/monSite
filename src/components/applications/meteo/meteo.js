import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WeatherInfo from "./weather";
import style from "./meteo.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import AlertMessage from "../../.././globalComponents/AlertMessage";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 0 3px",
    width: 330,
    margin: 30
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));
const styleContainer = {
  background: "white",
  maxWidth: 350,
  boxShadow: "0 0 4px",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  overflow: "hidden"
};

const Weather = () => {
  const classes = useStyles();

  const APIKEY = "bcdb74d77cc7d39f69c2ad6d23050836";

  const [weathers, setWeathers] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Paris");
  const [name, setName] = useState("Paris");
  const [error, setError] = useState(false);

  useEffect(() => {
    getWeather();
  }, [query]);

  const getWeather = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${APIKEY}`
    );
    const data = await response.json();
    console.log(data);
    setWeathers(data.list.slice(0, 4));
    setName(data.city.name);
    console.log(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className={style.Meteo}>
      <Container style={styleContainer}>
        <form onSubmit={getSearch}>
          <Paper className={classes.root}>
            <InputBase
              autoFocus
              className={classes.input}
              placeholder="Search Town"
              value={search}
              onChange={updateSearch}
            />
            <IconButton
              className={classes.iconButton}
              aria-label="search"
              onSubmit={getSearch}
              type="submit"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
        <p
          style={{
            fontFamily: "Roboto, Helvetica, Arial, sans-serif"
          }}
        >
          {name}
        </p>
        <div className={style.weather}>
          {weathers.map(weather => (
            <React.Fragment>
              <WeatherInfo
                hour={weather.dt_txt}
                temp={weather.main.temp}
                icon={weather.weather[0].description}
              />
              <Divider />
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Weather;
