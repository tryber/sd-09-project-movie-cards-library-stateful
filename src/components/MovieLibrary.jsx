import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { id, type } = target;
    this.setState({ [id]: (type === 'checkbox'
      ? target.checked : target.value) });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre } = this.state;

    return (
      <>
        <h2> Movie Library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  // movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
