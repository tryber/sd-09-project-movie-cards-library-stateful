import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import data from './data';

function App() {
  return (
    <div className="App">
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
