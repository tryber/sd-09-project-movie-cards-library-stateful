import React, { useCallback } from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange={ () => useCallback }
        bookmarkedOnly
        onBookmarkedChange={ useCallback }
        selectedGenre=""
        onSelectedGenreChange={ () => 'useCallback' }
      />
      <AddMovie
        onClick={ useCallback }
      />
      <MovieLibrary />
    </div>
  );
}

export default App;
