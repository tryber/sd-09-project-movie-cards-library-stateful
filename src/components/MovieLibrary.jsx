// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ this.props.movies } />
        <AddMovie />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   searchText: PropTypes.string,
//   onSearchTextChange: PropTypes.func,
//   bookmarkedOnly: PropTypes.bool,
//   onBookmarkedChange: PropTypes.func,
//   selectedGenre: PropTypes.string,
//   onSelectedGenreChange: PropTypes.func,
// }

export default MovieLibrary;
