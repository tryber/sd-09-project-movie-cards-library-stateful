import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
// import MovieCard from './components/MovieCard';
import MovieLibrary from './components/MovieLibrary';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
