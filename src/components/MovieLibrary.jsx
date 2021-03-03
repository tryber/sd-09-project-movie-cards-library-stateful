import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    if (target.type !== 'checkbox') {
      this.setState({
        [target.name]: target.value,
      });
    } else if (target.checked) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  render() {
    const { props, state, handleInput } = this;
    const { movies } = props;
    const { searchText, bookmarkedOnly, selectedGenre } = state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ handleInput }
          onBookmarkedChange={ handleInput }
          onSelectedGenreChange={ handleInput }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
