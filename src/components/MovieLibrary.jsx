import React from 'react';
import PropTypes from 'prop-types';
// import data from '../data';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
// import addMovies from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;
    this.state = { searchText, bookmarkedOnly, selectedGenre, movies };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={ movies }
        />
      </div>
    );
  }
}

// PropTypes.checkPropTypes();
MovieLibrary.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  movies: PropTypes.objectOf({
    movies: {
      test: 'test',
    },
  }),
};

MovieLibrary.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies: {
    test: 'test',
  },
};

export default MovieLibrary;
