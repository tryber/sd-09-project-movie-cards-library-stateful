import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
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

    this.filterMovies = this.filterMovies.bind(this);
    this.insertMovie = this.insertMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  handleChange(event, name) {
    const { value, type, checked } = event.target;
    const changedValue = type === 'checkbox' ? checked : value;
    // se o tipo for uma checkbox e estiver checked ele altera o valor para false para tirar o checked e vice-versa
    this.setState({ [name]: changedValue });
  }

  onBookmarkedChange(event) {
    this.handleChange(event, 'bookmarkedOnly');
  }

  onSelectedGenreChange(event) {
    this.handleChange(event, 'selectedGenre');
  }

  onSearchTextChange(event) {
    this.handleChange(event, 'searchText');
  }

  filterMovies() {
    const { bookmarkedOnly, movies } = this.state;

    let newMovies = movies;

    // filtra por favoritos
    if (bookmarkedOnly) {
      newMovies = newMovies.filter(({ bookmarked }) => bookmarked);
    }

    return newMovies;
    // filtra por texto

    // filtra por genero
  }

  insertMovie(newMovie) {
    const { movies } = this.state;
    newMovie.rating = parseFloat(newMovie.rating);

    this.setState({
      movies: [...movies, newMovie],
    });
    // Essa função vai adicionar os dados do state de Add movie na lista de movies no data.js
    // o newMovie contém a nova informação adicionada no AddMovie
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.insertMovie } />
        <MovieList movies={ this.filterMovies() } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
