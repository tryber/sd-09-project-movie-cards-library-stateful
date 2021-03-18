import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
