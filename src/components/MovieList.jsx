import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    // console.log('movieList - props', movies);
    const teste = movies.map((item, index) => <MovieCard key={ index } movie={ item } />);
    return (
      <div data-testid="movie-list" className="movie-list">
        { teste }
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

MovieList.defaultProps = {
  movies: {
    title: '',
    subtitle: '',
    storyline: '',
    rating: 0,
    imagePath: '',
    bookmarked: '',
    genre: '',
  },
};
