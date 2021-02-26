import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
/* import MovieCard from './components/MovieCard';
import MovieLibrary from './components/MovieLibrary';
import MovieList from './components/MovieList';
import Rating from './components/Rating'; */
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      {/* <MovieCard />
      <MovieLibrary />
      <MovieList />
      <Rating /> */}
    </div>
  );
}

export default App;
