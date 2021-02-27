import React from 'react';
import PropTypes from 'prop-types';

// import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies);

    return (
      <div data-testid="movie-list" className="movie-list">
        MovieList
        {/* { movies.map((movie) =>
          <MovieCard key={ movie.title } movie={ movie } />) } */}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
