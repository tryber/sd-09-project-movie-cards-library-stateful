import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <section>
        <SearchBar />
        <MovieList />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
