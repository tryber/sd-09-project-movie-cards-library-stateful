import React, { Component } from 'react';
import PropTypes from 'prop-types'

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          selectedGenre=""
          bookmarkedOnly={ false }
          onSearchTextChange={ this.handleSearchTextChange }
          onBookmarkedChange={ this.handleBookmarkedChange }
          onSelectedGenreChange={ this.handleSelectedGenreChange }
        />
        <AddMovie onClick={ this.handleAddMovieClick } />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired
}

export default MovieLibrary;
