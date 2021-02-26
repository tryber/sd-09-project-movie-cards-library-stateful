import React, { useCallback } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar 
        searchText={ String } 
        onSearchTextChange={ useCallback } 
        bookmarkedOnly={ Boolean } 
        onBookmarkedChange={ useCallback } 
        selectedGenre={ String } 
        onSelectedGenreChange={ useCallback }
      />
    </div>
  );
}

export default App;
