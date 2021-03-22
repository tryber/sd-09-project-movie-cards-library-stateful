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

    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  handleFavorite({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  handleGenre({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    let value = false;
    let filteredbyFav = movies;
    const filteredbyTitle = movies.filter((matches) => matches.title.includes(searchText)
      || matches.subtitle.includes(searchText)
      || matches.storyline.includes(searchText));
    if (bookmarkedOnly) {
      filteredbyFav = filteredbyTitle.filter((matches) => (
        matches.bookmarked === true
      ));
      value = true;
    }
    if (selectedGenre.length > 0) {
      return filteredbyFav.filter((matches) => matches.genre === selectedGenre);
    }
    if (value === true) return filteredbyFav;
    return filteredbyTitle;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filter = this.filterMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInput }
          onBookmarkedChange={ this.handleFavorite }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.handleGenre }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ filter } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
