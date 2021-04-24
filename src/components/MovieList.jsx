import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies: movie } = this.props;
    return (
      <div data-testid="movie-list" className="movie-list">
        { movie.map((item, index) => <MovieCard key={ index } movie={ item } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.string,
    genre: PropTypes.string,
  }),
}.isRequired;
