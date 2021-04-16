import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import './App.css';
import data from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
