import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie />
        <MovieList />
      </div>
    );
  }
}

export default MovieLibrary;
