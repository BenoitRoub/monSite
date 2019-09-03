import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Weather from './weather';
import style from './meteo.module.css';

const Meteo = () => {

  const APIKEY = "cd1ada7411fb68b2257528147d1a7b4b"

  const [weathers, setWeathers] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Paris');
  const [name, setName] = useState('Paris');
  const [error, setError] = useState(false)

 

  const getWeather = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${APIKEY}`)
    const data = await response.json();
    if (data.cod === "200")
      {     setWeathers(data.list.slice(0,4));
            setName(data.city.name);
            setError(false);}
    else setError(true)
  };

   useEffect(()=> {
    getWeather();
  }, [query]);

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
      <div className={style.Meteo} id="meteo">
        <p className={style.retourBoutton}
        onClick={close}>Retour</p>
        <form onSubmit={getSearch}
        className={style.searchForm}>
          <input 
          className={style.searchBar}
          value={search}
          onChange={updateSearch}
          type="text"
          placeholder=" nom de ville ex : Paris..."
          />
          { !error ? true : <div className={style.errorContainer}>
                              <p>Nous n'avons pas d'informations à propos de cette ville</p>
                            </div>} 
          <button
          onSubmit={getSearch}
          className={style.searchButton}
          type="submit">
          Search
          </button>
        </form>
        { error ? false : <p className={style.nom}>{name}</p>}
        { error ? false : 
          <div className={style.weather}>
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
