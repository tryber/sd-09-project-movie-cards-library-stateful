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
    let propsMovies = {
      genreFilter: false,
      genre: '',
      textFilter: false,
      text: '',
      noFilter: false,
    };
    if (selectedGenre.length !== 0) {
      propsMovies = { ...propsMovies, genreFilter: true, genre: selectedGenre };
    }
    if (searchText.length !== 0) {
      propsMovies = { ...propsMovies, textFilter: true, text: searchText };
    }
    if ((selectedGenre.length === 0) && (searchText.length === 0) && !(bookmarkedOnly)) {
      propsMovies = { ...propsMovies, noFilter: true };
    }
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
        <MovieList
          movies={ movies }
          bookmarked={ bookmarkedOnly }
          propsMovies={ propsMovies }
        />
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
