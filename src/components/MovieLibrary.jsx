// implement AddMovie component here

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
    this.filmFilter = this.filmFilter.bind(this);
    this.onClick = this.onClick.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }

  onSearchTextChange({ target: { value } }) {
    const { selectedGenre, bookmarkedOnly } = this.state;
    const searchText = value;
    this.setState({ searchText: value });
    this.filmFilter({ searchText, bookmarkedOnly, selectedGenre });
  }

  onBookmarkedChange({ target: { checked } }) {
    const { searchText, selectedGenre } = this.state;
    const bookmarkedOnly = checked;
    this.setState({ bookmarkedOnly: checked });
    this.filmFilter({ searchText, bookmarkedOnly, selectedGenre });
  }

  onSelectedGenreChange({ target: { value } }) {
    const { searchText, bookmarkedOnly } = this.state;
    const selectedGenre = value;
    this.setState({ selectedGenre: value });
    this.filmFilter({ searchText, bookmarkedOnly, selectedGenre });
  }

  onClick(newMovieCard) {
    this.setState((state) => ({ movies: [...state.movies, newMovieCard] }));
  }

  filmFilter({ searchText, bookmarkedOnly, selectedGenre }) {
    const { movies } = this.props;
    const filteredFilms = movies.filter((movie) => {
      if (bookmarkedOnly) {
        return movie.bookmarked === bookmarkedOnly;
      }
      return true;
    }).filter((movie) => {
      if (
        selectedGenre === 'action'
        || selectedGenre === 'comedy'
        || selectedGenre === 'thriller'
      ) {
        return movie.genre === selectedGenre;
      }
      return true;
    }).filter((movie) => {
      if (searchText !== '') {
        return (
          movie.title.includes(searchText)
          || movie.subtitle.includes(searchText)
          || movie.storyline.includes(searchText)
        );
      }
      return true;
    });
    this.setState({ movies: filteredFilms });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
