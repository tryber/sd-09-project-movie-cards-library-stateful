// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      movies: [],
    };
  }

  onChangeFunction({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSearchTextChange(target) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }
  //   addMovieToList() {
  //     movies;
  //   }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={ searchText } onSearchTextChange={ this.onSearchTextChange } bookmarkedOnly={ bookmarkedOnly } onBookmarkedOnly={ this.onChangeFunction } selectedGenre={ selectedGenre } onSelectedGenreChange={ this.onChangeFunction } />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape().isRequired,
};

export default MovieLibrary;
