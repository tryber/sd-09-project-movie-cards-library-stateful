import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
      <AddMovie />
    </div>
  );
}

export default App;
