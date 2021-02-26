import React from 'react';
import PropTypes from 'prop-types';
import FavoriteSymbol from './ForvoriteSymbol';

import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie, handleAddMovieFavorite } = this.props;
    const { title, subtitle, storyline, rating, imagePath, bookmarked } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        { !bookmarked ? <FavoriteSymbol
          handleAddMovieFavorite={ handleAddMovieFavorite }
          title={ title }
          textButton="Add "
        /> : <FavoriteSymbol
          handleAddMovieFavorite={ handleAddMovieFavorite }
          title={ title }
          textButton="Remove "
        /> }
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <Rating rating={ Number(rating) } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
  }).isRequired,
  handleAddMovieFavorite: PropTypes.func.isRequired,
};

export default MovieCard;
