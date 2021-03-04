import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.updateMoviesList = this.updateMoviesList.bind(this);
  }

  componentDidMount() {
    this.updateMoviesList();
  }

  handleInput({ target }) {
    const { type, name, checked, value } = target;
    if (type !== 'checkbox') {
      this.setState({
        [name]: value,
      }, () => {
        this.updateMoviesList();
      });
    } else if (checked) {
      this.setState({
        bookmarkedOnly: true,
      }, () => {
        this.updateMoviesList();
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      }, () => {
        this.updateMoviesList();
      });
    }
  }

  updateMoviesList() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const { movies } = this.props;
    const text = searchText.toUpperCase();
    this.setState({
      movies,
    });
    if ((searchText.length !== 0) && (selectedGenre.length !== 0)) {
      this.setState({
        movies: movies
          .filter((movie) => ((movie.title.toUpperCase().includes(text))
            || (movie.subtitle.toUpperCase().includes(text))
            || (movie.storyline.toUpperCase().includes(text)))
            && (movie.genre === selectedGenre)),
      });
    } else if ((searchText.length !== 0) && (bookmarkedOnly)) {
      this.setState({
        movies: movies
          .filter((movie) => ((movie.title.toUpperCase().includes(text))
            || (movie.subtitle.toUpperCase().includes(text))
            || (movie.storyline.toUpperCase().includes(text)))
            && (movie.bookmarked)),
      });
    } else if ((selectedGenre.length !== 0) && (bookmarkedOnly)) {
      this.setState({
        movies: movies
          .filter((movie) => (movie.genre === selectedGenre)
          && (movie.bookmarked)),
      });
    } else if (searchText.length !== 0) {
      this.setState({
        movies: movies
          .filter((movie) => ((movie.title.toUpperCase().includes(text))
          || (movie.subtitle.toUpperCase().includes(text))
          || (movie.storyline.toUpperCase().includes(text)))),
      });
    } else if (selectedGenre.length !== 0) {
      this.setState({
        movies: movies
          .filter((movie) => (movie.genre === selectedGenre)),
      });
    } else if (bookmarkedOnly) {
      this.setState({
        movies: movies
          .filter((movie) => (movie.bookmarked)),
      });
    }
  }

  addNewMovie(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  render() {
    const { state, handleInput, addNewMovie } = this;
    const { searchText, bookmarkedOnly, selectedGenre, movies } = state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ handleInput }
          onBookmarkedChange={ handleInput }
          onSelectedGenreChange={ handleInput }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ addNewMovie } />
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
