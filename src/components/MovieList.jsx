import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import AddMovieCard from './AddMovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, handleShowAddMovieForm, handleAddMovieFavorite } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
          handleAddMovieFavorite={ handleAddMovieFavorite }
        />)) }
        <AddMovieCard
          handleShowAddMovieForm={ handleShowAddMovieForm }
        />
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  handleShowAddMovieForm: PropTypes.func.isRequired,
  handleAddMovieFavorite: PropTypes.func.isRequired,
};

export default MovieList;
