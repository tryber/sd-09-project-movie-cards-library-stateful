import React from 'react';
import moviesList from './data';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ moviesList } />
    </div>
  );
}

export default App;
