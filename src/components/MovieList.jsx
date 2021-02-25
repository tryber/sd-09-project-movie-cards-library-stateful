import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          // .filter((movie) => movie.title.toUpperCase().includes(searchText.toUpperCase())
          //  || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
          //  || movie.storyline.toUpperCase().includes(searchText.toUpperCase()))
          // .filter((movie) => movie.genre.includes(selectedGenre))
          // .filter((movie) => (bookmarkedOnly === true)? movie.bookmarked === true: movie)
          .map((movie) => (<MovieCard key={ movie.title } movie={ movie } />)) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
