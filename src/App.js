import React from 'react';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
