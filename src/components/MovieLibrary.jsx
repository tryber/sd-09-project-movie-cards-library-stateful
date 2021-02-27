import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(movies);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          // onSearchTextChange={ this.onSearchTextChange }
          onSearchTextChange={ Component }
          bookmarkedOnly={ bookmarkedOnly }
          // onBookmarkedChange={ this.onBookmarkedChange }
          onBookmarkedChange={ Component }
          selectedGenre={ selectedGenre }
          // onSelectedGenreChange={ this.onSelectedGenreChange }
          onSelectedGenreChange={ Component }
        />
        <AddMovie
          onClick={ this.onClick }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.string.isRequired,
// };

export default MovieLibrary;
