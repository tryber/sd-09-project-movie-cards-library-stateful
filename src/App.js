import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import movies from './data';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default App;
