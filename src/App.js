import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
