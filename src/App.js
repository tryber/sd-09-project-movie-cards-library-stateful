import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import GenInput from './components/GenInput';
import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <GenInput />
      <MovieLibrary movies={ data } />
    </div>
  );
}
export default App;
