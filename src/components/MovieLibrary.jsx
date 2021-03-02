// implement AddMovie component here
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
    this.onChangeFunction = this.onChangeFunction.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onChangeFunction({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
    // this.filterMovies();
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let searchFiltered = movies;
    if (searchText) {
      searchFiltered = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      searchFiltered = movies.filter(({ bookmarked }) => bookmarked === true);
    }
    if (selectedGenre) {
      searchFiltered = movies.filter(({ genre }) => genre === selectedGenre);
    }
    return searchFiltered;
  }

  addNewMovie(movieInfo) {
    const { movies } = this.state;
    movies.push(movieInfo);
    this.setState({
      movies,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onChangeFunction }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onChangeFunction }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onChangeFunction }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape().isRequired,
};

export default MovieLibrary;
