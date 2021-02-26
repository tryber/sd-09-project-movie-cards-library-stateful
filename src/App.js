import React, { Component } from 'react';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // handleSearchTextChange() {}

  // handleBookmarkedChange() {}

  // handleSelectedGenreChange() {}

  // handleAddMovieClick() {

  // }

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
