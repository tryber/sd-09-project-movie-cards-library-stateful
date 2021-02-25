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
    this.changeMovies = this.changeMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    target.checked ?
    this.setState({ bookmarkedOnly: true }) : this.setState({ bookmarkedOnly: false });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  changeMovies() {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.state;
    let filteredMovie = movies;
    if (bookmarkedOnly) {
      filteredMovie = movies.filter((movie) => movie.bookmarked);
    }
    if (searchText) {
      filteredMovie = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
    }
    if (selectedGenre) {
      filteredMovie = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return filteredMovie;
  }

  addMovie(Movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, Movie],
    });
  }

  render() {
    const movies = this.changeMovies();
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <AddMovie onClick={ this.addMovie } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
};

export default MovieLibrary;