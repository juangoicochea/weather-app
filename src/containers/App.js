import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad';

const apiKey = '1cb8d4f9cdb29579237cb4406a08f46b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => oldCities.filter(ciudad => ciudad.id != recurso.id ? recurso.id : alert("Ciudad repetida")  ));
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Esta ciudad no se encuentra en la lista");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <div className='container-new'>
        <Route
            path='/'
            render={() => <Nav onSearch={onSearch} exact />}
        />
        <Route path='/about' component={About} exact />
        <div>
          {
            cities.length > 0 ? (
              <div>
                <Route
                    path='/'
                    render={() => <Cards cities={cities} onClose={onClose} exact />}
                />
                <Route
                  exact 
                  path='/ciudad/:ciudadId'
                  render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} exact />}
                />
              </div>
            ) : <div className='pleaseSearch'>Please search for a city</div>
          }  
        </div>
        <hr />
      </div>
    </div>
  );
}

export default App;
