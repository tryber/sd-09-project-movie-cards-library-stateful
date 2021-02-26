// implement AddMovie component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}

export default MovieLibrary;
