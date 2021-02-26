import React, { useCallback } from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange={ useCallback }
        bookmarkedOnly
        onBookmarkedChange={ useCallback }
        selectedGenre=""
        onSelectedGenreChange={ useCallback }
      />
      <AddMovie
        onClick={ useCallback }
      />
    </div>
  );
}

export default App;
