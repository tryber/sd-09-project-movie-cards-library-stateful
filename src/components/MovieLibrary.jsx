import React from 'react';
import PropTypes from 'prop-types';
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

MovieLibrary.defaultProps = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieLibrary;
