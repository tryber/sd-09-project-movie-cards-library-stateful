import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
    </div>
  );
}

export default App;
