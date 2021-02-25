import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .filter((movie) => movie.title.includes(searchText)
           || movie.subtitle.includes(searchText)
           || movie.storyline.includes(searchText))
          .filter((movie) => movie.genre.includes(selectedGenre))
          .filter((movie) => (bookmarkedOnly === true)? movie.bookmarked === true: movie)
          .map((movie) => (<MovieCard key={ movie.title } movie={ movie } />)) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;
