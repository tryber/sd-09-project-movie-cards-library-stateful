// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectGenre: '',
  //   };
  // }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        {/* searchText={ searchText }
        onSearchTextChange={ onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange= { onBookmarkedChange }
        selectGenre = { selectGenre }
        onSelectedGenreChange = { onSelectedGenreChange }
        /> */}
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
