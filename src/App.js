import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=""
        onSearchTextChange={ () => '' }
        bookmarkedOnly={ Boolean }
        onBookmarkedChange={ () => '' }
        selectedGenre=""
        onSelecetedGenreChange={ () => '' }
      />
      <AddMovie onClick={ () => '' } />
    </div>
  );
}

export default App;
