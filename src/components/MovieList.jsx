import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.length > 0
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <p className="movie-list-error">Desculpe, não achamos nenhum filme!</p> }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
