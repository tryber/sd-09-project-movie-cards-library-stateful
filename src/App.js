import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;
