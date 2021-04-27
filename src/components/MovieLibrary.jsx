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
    if (target.checked) this.setState({ bookmarkedOnly: true });
    else this.setState({ bookmarkedOnly: false });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  changeMovies() {
    const { movies } = this.state;
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    let filterMovie = movies;
    if (bookmarkedOnly) {
      filterMovie = movies.filter((movie) => movie.bookmarked);
    }
    if (searchText) {
      filterMovie = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
    }
    if (selectedGenre) {
      filterMovie = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return filterMovie;
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
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
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
};

export default MovieLibrary;
