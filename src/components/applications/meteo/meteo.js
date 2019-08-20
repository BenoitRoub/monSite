import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Weather from './weather';
import './meteo.css';
import StaticHeader from '../.././header/staticHeader';

const Meteo = () => {

  const APIKEY = "cd1ada7411fb68b2257528147d1a7b4b"

  const [weather, setWeather] = useState([]);
  const [weathers, setWeathers] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Paris');
  const [name, setName] = useState('Paris');
  const [error, setError] = useState(false)

  useEffect(()=> {
    getWeather();
  }, [query]);

  const getWeather = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${APIKEY}`)
    const data = await response.json();
    console.log(data.cod);
    if (data.cod === "200")
      {setWeather(data.list[0]);
        console.log(data)
            setWeathers(data.list.slice(0,4));
            setName(data.city.name);
            setError(false);
            console.log(error)}
    else setError(true)
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const status = useSelector((state) => state.statusApplications.statusMeteo)

  const dispatch = useDispatch();

  const close = () => {
    dispatch({type: 'SWITCHMETEO'})
  }

  if (status)
    return (
      <div className="Meteo" id="meteo">
        <p className="retourBoutton"
        onClick={close}>Retour</p>
        <form onSubmit={getSearch}
        className="search-form">
          <input 
          className="search-bar"
          value={search}
          onChange={updateSearch}
          type="text"
          placeholder=" nom de ville ex : Paris..."
          />
          { !error ? true : <div className="errorContainer">
                              <p>Nous n'avons pas d'informations à propos de cette ville</p>
                            </div>} 
          <button
          onSubmit={getSearch}
          className="search-button"
          type="submit">
          Search
          </button>
        </form>
        { error ? false : <p className="nom">{name}</p>}
        { error ? false : 
          <div className="weather">
           {weathers.map(weather => (
            <Weather
              hour={weather.dt_txt}
              temp={weather.main.temp}
              description={weather.weather[0].description}
              clouds={weather.clouds.all}/>
          ))}
          </div> }

      
      </div>
    )
  else return (null)
    ;
}

export default Meteo;
