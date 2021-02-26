import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor({ movies }) {
    super();
    this.onChange = this.onChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onChange({ target }) {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(({ movies }) => {
      if (Object.keys(this.filters).includes(name)) {
        movies = this.filters[name](value);
      }
      return { [name]: value, movies };
    });
  }

  get filters() {
    return {
      searchText: (text) => {
        const { movies } = this.state;
        return movies.filter(({ title, subtitle, storyline }) => {
          const textInTitle = title.includes(text);
          const textInSubtitle = subtitle.includes(text);
          const textInStoryline = storyline.includes(text);
          return textInTitle || textInSubtitle || textInStoryline;
        });
      },
      bookmarkedOnly: (isSet) => {
        const { movies } = this.state;
        if (isSet) {
          return movies.filter(({ bookmarked }) => bookmarked === true);
        }
        return movies;
      },
      selectedGenre: (genre) => {
        const { movies } = this.state;
        return movies.filter(({ genre: currGenre }) => currGenre.includes(genre));
      },
    };
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

export default MovieLibrary;
