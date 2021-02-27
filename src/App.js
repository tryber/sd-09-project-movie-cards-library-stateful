import React from 'react';
import './App.css';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
