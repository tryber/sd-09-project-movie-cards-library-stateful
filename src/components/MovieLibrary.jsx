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

    this.handleChange = this.handleChange.bind(this);
    this.filterFilms = this.filterFilms.bind(this);
  }

  /* função está no gabarito de ex da trybe */
  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // baseado no code review do marcelocampos66
  filterFilms() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let newArrFilterFilms = movies;
    if (bookmarkedOnly) {
      newArrFilterFilms = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      newArrFilterFilms = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText) {
      newArrFilterFilms = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    }
    return newArrFilterFilms;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ this.filterFilms() }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MovieLibrary;
