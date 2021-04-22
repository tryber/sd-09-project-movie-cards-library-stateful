import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    console.log('MovieList - props ', movie);
    return (
      <div data-testid="movie-list" className="movie-list">
        <MovieCard movie={ movie } />
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.boolean,
    genre: PropTypes.string,
  }),
};

MovieList.defaultProps = {
  movie: [{
    title: 'thriller',
    subtitle: 'Final Fantasy XV',
    storyline: 'King Regis, who oversees the land of Lucis',
    rating: 4.5,
    imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
    bookmarked: true,
    genre: 'action',
  }],
};

export default MovieList;
