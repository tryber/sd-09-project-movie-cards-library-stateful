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
    const genreFilter = (array) => array.filter(({ genre }) => genre === selectedGenre);
    const textFilter = (array) => array
      .filter(({ title, subtitle, storyline }) => title.includes(searchText)
    || subtitle.includes(searchText)
    || storyline.includes(searchText));
    const bookmarkedFilter = (array) => array
      .filter(({ bookmarked }) => bookmarked === true);
    if (!bookmarkedOnly) {
      return selectedGenre !== '' ? genreFilter(textFilter(movies)) : textFilter(movies);
    }
    return selectedGenre !== '' ? bookmarkedFilter(genreFilter(textFilter(movies)))
      : bookmarkedFilter(textFilter(movies));
  }

  addMovie(movieObject) {
    const { movies } = this.state;
    this.setState({
      movies: movies.concat(movieObject),
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
