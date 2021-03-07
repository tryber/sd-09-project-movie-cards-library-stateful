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

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.textFilter();
  }

  handleBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
    this.checkboxFilter();
  }

  handleSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
    this.selectFilter();
  }

  handleAddMovie(movie) {
    const { movies } = this.state;
    console.log(movie);
    this.setState({ movies: [...movies, movie] });
  }

  textFilter() {
    const { searchText, movies } = this.state;

    const filteredMovies = movies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      return (
        title.includes(searchText) || subtitle.includes(searchText) || storyline.includes(searchText)
      );
    });
    this.setState({ movies: filteredMovies });
  }

  checkboxFilter() {
    const { movies } = this.state;
    const filteredMovies = movies.filter((movie) => movie.bookmarked === true);
    this.setState({ movies: filteredMovies });
  }
  selectFilter() {
    const { selectedGenre, movies } = this.state;
    const filteredMovies = movies.filter((movie) => movie.genre === selectedGenre);
    this.setState({ movies: filteredMovies });
  }

  render() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
