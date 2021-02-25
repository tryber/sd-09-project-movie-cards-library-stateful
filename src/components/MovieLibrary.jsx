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
    this.onSearchTextChange = this.onSeachTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovieList = this.filterMovieList.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSeachTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { name } = target;
    const value = target.checked;
    this.setState({
      [name]: value,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  filterMovieList() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    if (searchText) {
      filteredMovies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filteredMovies = movies.filter((movie) => (
        movie.bookmarked === true
      ));
    }
    if (selectedGenre) {
      filteredMovies = movies.filter((movie) => (
        movie.genre === selectedGenre
      ));
    }
    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filterMovieList();

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          onBookmarkedChange={ this.onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
