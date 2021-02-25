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
    this.changeHandler = this.changeHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.setMovies = this.setMovies.bind(this);
  }

  setMovies() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    let filteredMovies = movies;
    if (bookmarkedOnly) {
      filteredMovies = movies.filter(({ bookmarked }) => bookmarked === true);
    }
    if (selectedGenre !== '') {
      filteredMovies = movies.filter(({ genre }) => genre === selectedGenre);
    }
    if (searchText !== '') {
      return movies.filter(({ title, subtitle, storyline }) => title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText));
    }
    return filteredMovies;
  }

  addMovie(movieObject) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movieObject],
    });
  }

  changeHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.setMovies();
    const { changeHandler } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ changeHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ changeHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ changeHandler }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieLibrary;
