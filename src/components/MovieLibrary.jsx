import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor({ movies }) {
    super();
    // Set state
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    // Bind methods
    this.onChange = this.onChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onChange({ target }) {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.setState({ movies: this.filterMovies() });
    });
  }

  get filters() {
    return {
      searchText: (value, { title, subtitle, storyline }) => (
        [title, subtitle, storyline]
          .some((field) => field.includes(value))
      ),
      bookmarkedOnly: (value, { bookmarked }) => bookmarked === value,
      selectedGenre: (value, { genre }) => genre.includes(value),
    };
  }

  filterMovies() {
    const { movies: allMovies } = this.props;
    const fields = Object.entries(this.state);
    return fields.reduce((movies, [key, value]) => {
      if (key !== 'movies' && value !== false) {
        movies = movies.filter(this.filters[key].bind(null, value));
      }
      return movies;
    }, allMovies);
  }

  addNewMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onChange }
          onBookmarkedChange={ this.onChange }
          onSelectedGenreChange={ this.onChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};
