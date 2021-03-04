import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange={() => ''}
        bookmarkedOnly={true}
        onBookmarkedChange={() => ''}
        selectedGenre=''
        onSelecetedGenreChange={() => ''}
      />
    </div>
  );
}

export default App;
