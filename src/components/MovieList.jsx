import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarked, propsMovies } = this.props;
    const { genreFilter, genre, textFilter, text, noFilter } = propsMovies;
    return (
      <div data-testid="movie-list" className="movie-list">
        { (bookmarked) && (
          movies
            .filter((movie) => (movie.bookmarked))
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        ) }
        { (genreFilter) && (
          movies
            .filter((movie) => (movie.genre === genre))
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        ) }
        { (textFilter) && (
          movies
            .filter((movie) => ((movie.title.includes(text))
              || (movie.subtitle.includes(text))
              || (movie.storyline.includes(text))))
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        ) }
        { (noFilter) && (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        ) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  bookmarked: PropTypes.bool.isRequired,
  propsMovies: PropTypes.shape({
    genreFilter: PropTypes.bool,
    genre: PropTypes.string,
    textFilter: PropTypes.bool,
    text: PropTypes.string,
    noFilter: PropTypes.bool,
  }).isRequired,
};

export default MovieList;
