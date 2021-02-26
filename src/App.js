import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import dataMovies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ dataMovies } />
    </div>
  );
}

export default App;
