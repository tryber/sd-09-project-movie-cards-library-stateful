// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  resetState(estado) {
    console.log(estado);
  }

  consoleLog() {
    const { movies } = this.state;
    console.log(movies);
  }

  filterMovies() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let newMovies = [...movies];
    if (bookmarkedOnly) {
      newMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      newMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      newMovies = movies.filter((movie) => {
        const movieTitle = (movie.title).toLowerCase();
        const movieSubtitle = (movie.subtitle).toLowerCase();
        const storyline = (movie.storyline).toLowerCase();
        const isMovieTitleFound = movieTitle.includes(searchText.toLowerCase());
        const isMovieSubtitleFound = movieSubtitle.includes(searchText.toLowerCase());
        const isStorylineFound = storyline.includes(searchText.toLowerCase());
        if (
          isMovieTitleFound === true
          || isMovieSubtitleFound === true
          || isStorylineFound === true
        ) {
          return true;
        }
        return false;
      });
    }
    // console.log(newMovies);
    return newMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.resetState } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
