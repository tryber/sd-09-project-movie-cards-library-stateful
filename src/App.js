import React from 'react';
import Header from './components/Header';
import './App.css';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="body">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
