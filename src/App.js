import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import GenInput from './components/GenInput';
import './App.css';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <GenInput />
      <MovieLibrary movies={ movies } />
    </div>
  );
}
export default App;
