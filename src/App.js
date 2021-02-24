import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar searchText="" onSearchTextChange="" bookmarkedOnly={ false } onBookmarkedChange='' selectedGenre="" onSelectedGenreChange="" />
      <MovieLibrary />
    </div>
  );
}

export default App;
