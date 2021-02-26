import React, { Component } from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary'
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
        <MovieLibrary />
      </div>
    );
  }
}

export default App;
