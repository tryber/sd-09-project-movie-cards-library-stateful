import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <p>Movie Library</p>
        <SearchBar />
      </div>
    );
  }
}

export default MovieLibrary;
