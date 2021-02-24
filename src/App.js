import React from 'react';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
