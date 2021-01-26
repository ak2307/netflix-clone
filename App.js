import React from 'react';
import './App.css';

import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';

import requests from './requests';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row 
        title="Netflix Originals" 
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
