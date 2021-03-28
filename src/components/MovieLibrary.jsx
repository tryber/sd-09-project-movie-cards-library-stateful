import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    return (
      <>
        <h2> Movie Library </h2>
        <SearchBar />
        <MovieList />
        <AddMovie />
      </>
    );
  }
}

export default MovieLibrary;
