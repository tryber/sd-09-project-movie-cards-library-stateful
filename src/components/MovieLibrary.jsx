import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  // constructor(props) {
  // super(props);
  // }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.prototype = {
  movie: PropTypes.string.isRequired
};

export default MovieLibrary;
