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
    this.saveMoviesList = this.saveMoviesList.bind(this);
  }

  componentDidMount() {
    this.saveMoviesList();
  }

  handleInput({ target }) {
    if (target.type !== 'checkbox') {
      this.setState({
        [target.name]: target.value,
      });
    } else if (target.checked) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  saveMoviesList() {
    const { movies } = this.props;
    this.setState({
      movies,
    });
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
        <MovieList
          movies={ movies }
          bookmarked={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          searchText={ searchText }
        />
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
