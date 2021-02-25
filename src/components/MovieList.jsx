import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const {
      movies,
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.props;

    const { title, genre, bookmarked } = movies;

    return (
      <div data-testid="movie-list" className="movie-list">
        if (
        {bookmarkedOnly}
        )
        {
          movies.filter(() => [{ bookmarked }] === true)
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
        if (
        {selectedGenre}
        )
        {
          movies.filter(() => [{ genre }] === selectedGenre)
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
        if (
        {searchText}
        )
        {
          movies.filter(() => [{ title }].includes(searchText))
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

// { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;
