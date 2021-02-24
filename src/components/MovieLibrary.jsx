import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.AddNewMovie = this.AddNewMovie.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,

    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  AddNewMovie(newMovie) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  inputTextFilter(movies) {
    const { searchText } = this.state;
    const textInput = movies.filter(
      (name) => name.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
      || name.subtitle.toLowerCase()
        .indexOf(searchText.toLowerCase()) >= 0 || name.storyline
        .toLowerCase().indexOf(searchText.toLowerCase()) >= 0,
    );
    return textInput;
  }

  filters() {
    const { movies, bookmarkedOnly, selectedGenre } = this.state;

    if (bookmarkedOnly && selectedGenre) {
      return this.inputTextFilter(movies).filter(
        (name) => name.bookmarked === true && name.genre === selectedGenre,
      );
   }
    if (bookmarkedOnly) {
      return this.inputTextFilter(movies).filter(
        (name) => name.bookmarked === true,
      );
   }
    if (selectedGenre) {
      return this.inputTextFilter(movies).filter(
        (name) => name.genre === selectedGenre,
      );
   }
    return this.inputTextFilter(movies);
  }

  handleMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filterMovie = movies
      .filter((movie) => movie.genre.toLowerCase().includes(selectedGenre))
      .filter((movie) => movie.title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));
    filterMovie = !bookmarkedOnly
      ? filterMovie : filterMovie.filter((movie) => movie.bookmarked);
    return filterMovie;
  }

  render() {
    const { searchText, bookmarkedOnly, movies, selectedGenre } = this.state;

    const moviesFilter = this.handleMovies(movies);

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          onBookmarkedChange={ this.onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.onSearchTextChange }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ moviesFilter } />
        <AddMovie onClick={ this.AddNewMovie }/>
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
