import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    if (searchText !== '') {
      filteredMovies = movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }

    if (bookmarkedOnly) {
      filteredMovies = movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filteredMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filterMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
