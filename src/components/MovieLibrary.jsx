// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.movieList = this.movieList.bind(this);
    this.addMoviefct = this.addMoviefct.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    if (target.type === 'checkbox') {
      const isBookmarked = target.checked;
      (this.setState({ bookmarkedOnly: isBookmarked }));
    } else {
      this.setState({ [name]: value });
    }
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  movieList() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.state;
    let movieListReturn = movies;
    if (searchText !== '') {
      movieListReturn = movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      movieListReturn = movies.filter((movie) => movie.bookmarked === (bookmarkedOnly));
    }
    if (selectedGenre !== '') {
      movieListReturn = movies.filter((movie) => movie.genre === (selectedGenre));
    } return movieListReturn;
  }

  addMoviefct(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.movieList();

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMoviefct } />
      </div>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default MovieLibrary;
