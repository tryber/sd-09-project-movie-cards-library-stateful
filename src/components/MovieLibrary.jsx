import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    console.log('MovieLibrary - props', this.props.movie);

    const { movie } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movie,
    };
  }

  onClick() {
    console.log('Callback');
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movie } = this.state;
    this.props.movie.map(item => console.log('this.props - render', item));
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movie={ movie } />
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
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

MovieLibrary.defaultProps = {
  movie: [{
    title: 'Kingsglaive',
    subtitle: 'Final Fantasy XV',
    storyline: 'King Regis, who oversees the land of Lucis',
    rating: 4.5,
    imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
    bookmarked: true,
    genre: 'action',
  }],
};

export default MovieLibrary;
