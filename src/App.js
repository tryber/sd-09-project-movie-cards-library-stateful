import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  function handleClick(stateObj, initialState) {
    console.log(initialState);
    console.log(stateObj);
  }

  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <AddMovie onClick={ handleClick } />
    </div>
  );
}

export default App;
