import React from 'react';
// import CitySelector from './components.js/CitySelector';
// import { API_KEY, API_BASE_URL } from './apis/config'
import './App.css';
import { Container } from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import WeatherList from './components.js/WeatherList';

import Weather from './components.js/Weather';

const App = () => {
  const { data, error, isLoading } = UseFetch();

  // error handling and loading
  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>
    if (!data && isLoading) return <h2>LOADING...</h2>
    if (!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (

    <Container className="App">
      <Weather />

      {/* <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} /> */}

      {/* don't forget the change */}
      {getContent()}
    </Container>
  );
};

export default App;