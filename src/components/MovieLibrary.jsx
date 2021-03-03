// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterBookMarkedOnlyMovies = this.filterBookMarkedOnlyMovies.bind(this);
    this.filterMoviesByGenre = this.filterMoviesByGenre.bind(this);
    this.filterMoviesByText = this.filterMoviesByText.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onClick = this.onClick.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  onClick(movie) {
    this.setState((previousState) => {
      let { movies } = previousState;
      movies = [...movies, movie];
      return { movies };
    });
  }

  filterMoviesByText() {
    let { searchText } = this.state;
    const { movies } = this.state;
    searchText = searchText.toLowerCase();
    const filteredMovies = movies.filter(({ title, subtitle, storyline }) => (
      title.toLowerCase().includes(searchText)
      || subtitle.toLowerCase().includes(searchText)
      || storyline.toLowerCase().includes(searchText)
    ));
    return filteredMovies;
  }

  filterBookMarkedOnlyMovies() {
    const { movies, bookmarkedOnly } = this.state;
    const filteredMovies = movies.filter(
      ({ bookmarked }) => bookmarkedOnly === bookmarked,
    );
    return filteredMovies;
  }

  filterMoviesByGenre() {
    const { movies, selectedGenre } = this.state;
    const filteredMovies = movies.filter(
      ({ genre }) => selectedGenre === genre,
    );
    return filteredMovies;
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    if (bookmarkedOnly) {
      return this.filterBookMarkedOnlyMovies();
    }
    if (selectedGenre !== '') {
      return this.filterMoviesByGenre();
    }
    if (searchText !== '') {
      return this.filterMoviesByText();
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovies = this.filterMovies();
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
