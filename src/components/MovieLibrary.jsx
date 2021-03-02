import React, { Component } from 'react';
import MovieList from './MovieList';
import SeachBar from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SeachBar />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary
