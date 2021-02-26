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
    this.addMovieFunc = this.addMovieFunc.bind(this);
    this.changeMovies = this.changeMovies.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  changeMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let movieFilter = movies;

    if (searchText !== '') {
      movieFilter = movies.filter((movie) => (
        movie.title.toUpperCase().includes(searchText.toUpperCase())
      || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
      || movie.storyline.toUpperCase().includes(searchText.toUpperCase())
      ));
    }

    if (bookmarkedOnly) {
      movieFilter = movieFilter.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      movieFilter = movieFilter.filter((movie) => movie.genre === selectedGenre);
    }

    return movieFilter;
  }

  addMovieFunc({ title, subtitle, storyline, rating, imagePath, bookmarked, genre }) {
    const { movies } = this.state;
    movies.push({
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked,
      genre,
    });
    this.setState(
      [movies],
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.changeMovies();
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
        <AddMovie onClick={ this.addMovieFunc } />
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
