import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        <Header />
        <SearchBar />
        <AddMovie />
        <MovieList movies={ movies } />
      </>
    );
  }
}

export default MovieLibrary;
