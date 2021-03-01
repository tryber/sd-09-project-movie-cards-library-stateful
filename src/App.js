import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  function handleClick(stateObj, initialState) {
    stateObj = initialState;
    console.log(initialState);
    console.log(stateObj);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={ handleClick } />
    </div>
  );
}

export default App;
