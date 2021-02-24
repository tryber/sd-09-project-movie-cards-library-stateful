import React, { useCallback } from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText="Texto mui legal!"
        onSearchTextChange={ () => useCallback }
        bookmarkedOnly
        onBookmarkedChange={ useCallback }
        selectedGenre=""
        onSelectedGenreChange={ useCallback }
      />
    </div>
  );
}

export default App;
