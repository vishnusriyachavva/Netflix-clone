import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from './Nav.js';
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="trending" fetchUrl={requests.fetchTrending} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;