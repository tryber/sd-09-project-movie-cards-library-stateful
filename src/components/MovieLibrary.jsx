// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookmarked = this.handleBookmarked.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleSearchText(event) {
    this.setState({ searchText: event.target.value });
  }

  handleBookmarked(event) {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  handleGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  addNewMovie(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => this.handleSearchText(event) }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => this.handleBookmarked(event) }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => this.handleGenreChange(event) }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
