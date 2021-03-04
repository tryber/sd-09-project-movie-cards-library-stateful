import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarked, searchText, selectedGenre } = this.props;
    let moviesList = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    if (searchText.length !== 0) {
      moviesList = movies
        .filter((movie) => ((movie.title.includes(searchText))
          || (movie.subtitle.includes(searchText))
          || (movie.storyline.includes(searchText))))
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    } else if (selectedGenre.length !== 0) {
      moviesList = movies
        .filter((movie) => (movie.genre === selectedGenre))
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    } else if (bookmarked) {
      moviesList = movies
        .filter((movie) => (movie.bookmarked))
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    }
    return (
      <div data-testid="movie-list" className="movie-list">
        { moviesList }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
  bookmarked: PropTypes.bool,
  searchText: PropTypes.string,
  selectedGenre: PropTypes.string,
};

MovieList.defaultProps = {
  movies: [],
  bookmarked: false,
  searchText: '',
  selectedGenre: '',
};

export default MovieList;
