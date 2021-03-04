import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar searchText = '' onSearchTextChange ='callback' bookmarkedOnly = 'um boolean' onBookmarkedChange = 'uma callback' selectedGenre = 'uma string' onSelectedGenreChange =  'uma callback' />
    </div>
  );
}

export default App;
