import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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

  onSelectedGenreChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  searchMovies(movies) {
    const { bookmarkedOnly } = this.state;
    let filteredMovies = movies;
    /* Para início da função e criação de filtro para filmes favoritos, consultei o PR de Johnealves
    https://github.com/tryber/sd-09-project-movie-cards-library-stateful/pull/75
    Estava meio perdido nessa questão e ficando estagnado. Mas ainda acho que consultei o repositório
    do colega cedo demais. My bad :'(
    Farei os demais filtros sozinho, prometo */
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }
    return filteredMovies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    let { movies } = this.state;
    movies = this.searchMovies(movies);
    return (
      <>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}),
}.isRequired;

export default MovieLibrary;
