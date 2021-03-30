import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.expressionAddMovie = this.expressionAddMovie.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.filterBookmarked = this.filterBookmarked.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { id, type } = target;
    this.setState({ [id]: (type === 'checkbox'
      ? target.checked : target.value) });
  }

  filterGenre(movies, selectedGenre) {
    return movies.filter(({ genre }) => (genre.includes(selectedGenre)));
  }

  filterBookmarked(movies, bookmarkedOnly) {
    return bookmarkedOnly ? movies.filter(({ bookmarked }) => bookmarked === true)
      : (movies);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return this
      .filterBookmarked(this
        .filterGenre(movies, selectedGenre), bookmarkedOnly)
      .filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
  }

  expressionAddMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

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
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.expressionAddMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
