import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    const { value } = event.target;
    this.setState({
      searchText: value,
      movies: (value ? movies
        .filter((movie) => movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value))
        : movies),
    });
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
      movies: (value ? movies.filter((movie) => movie.genre === value) : movies),
    });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    const { movies } = this.props;
    this.setState({
      bookmarkedOnly: checked,
      movies: (checked ? movies.filter((movie) => movie.bookmarked === checked) : movies),
    });
  }

  saveMovie(movie) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <AddMovie onClick={ this.saveMovie } />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
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
