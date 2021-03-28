import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2> Movie Library </h2>
        <SearchBar />
        <MovieList movies={ this.props.movies } />
        <AddMovie />
      </>
    );
  }
}

export default MovieLibrary;
