// implement AddMovie component here
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import { movieLibraryFirstState as firstState } from '../extraData';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    firstState.movies = movies;
    this.state = firstState;

    this.changeValues = this.changeValues.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  changeValues(event) {
    const { name, value, type, checked } = event.target;
    return type === 'checkbox'
      ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  filterMovies(search = false, favorites = false, setGenre = false) {
    // Todas as const sao Arrays
    const { movies } = this.state;
    const filterText = movies.filter(({ title, subtitle, storyline }) => (
      title.toLowerCase().includes(search.toLowerCase())
    || subtitle.toLowerCase().includes(search.toLowerCase())
    || storyline.toLowerCase().includes(search.toLowerCase())
    ));

    if (favorites && setGenre) {
      return filterText
        .filter(({ bookmarked }) => bookmarked)
        .filter(({ genre }) => genre === setGenre);
    }
    if (favorites) return filterText.filter(({ bookmarked }) => bookmarked);
    if (setGenre) return filterText.filter(({ genre }) => genre === setGenre);
    return filterText;
  }

  newMovie(addedMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, addedMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeValues }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeValues }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeValues }
        />
        <MovieList
          movies={ this.filterMovies(searchText, bookmarkedOnly, selectedGenre) }
        />
        <AddMovie onClick={ this.newMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
