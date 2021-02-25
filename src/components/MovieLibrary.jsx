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
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const { searchText, movies } = this.state;
    const { name, value } = target;
    this.setState({
      [name]: value,
      movies: movies
        .filter((movie) => JSON.stringify(movie).toUpperCase()
          .includes(searchText.toUpperCase())),
    });
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
      movies: ((checked) ? movies
        .filter((movie) => movie.bookmarked === value) : movies),
    });
    console.log();
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { value } = target;
    this.setState({
      selectedGenre: value,
      movies: ((value) ? movies
        .filter((movie) => movie.genre === value) : movies),
    });
  }

  addMovie(addState) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, addState],
    });
  }

  // searchMovies() {
  //   const { searchText, bookmarkedOnly, movies, selectedGenre } = this.state;
  //   let moviesFiltered = movies
  //     .filter((movie) => JSON.stringify(movie).toUpperCase()
  //       .includes(searchText.toUpperCase()));
  //   if (bookmarkedOnly) {
  //     return movies.filter((movie) => movie.bookmarked === true);
  //   }
  //   const movieList = ((!selectedGenre) ? movies : movies
  //     .filter((movie) => movie.genre === selectedGenre));
  //   return movieList;
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie onClick={ this.addMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
