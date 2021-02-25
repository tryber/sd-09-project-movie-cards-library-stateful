import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.onClick = this.onClick.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    }
  }

  onClick(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    if (checked) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  movieFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtered = movies;
    if (searchText) {
      filtered = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filtered = movies.filter((movie) => (
        movie.bookmarked === true
      ));
    }
    if (selectedGenre) {
      filtered = movies.filter((movie) => (
        movie.genre === selectedGenre
      ));
    }
    return filtered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.movieFilter();
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSearchTextChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.onClick }
        />
      </div>

    )
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
};

export default MovieLibrary;
