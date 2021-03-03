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

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onClick(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  // Utilizei a lógica de Bruno Brolesi para filtar na SearchBar a lista de filmes referente ao requisito 18.

  filterMovies() {
    const { movies, selectedGenre, bookmarkedOnly, searchText } = this.state;
    if (selectedGenre !== '') {
      const filterMovies = movies.filter(({ genre }) => genre === selectedGenre);
      return filterMovies;
    }
    if (bookmarkedOnly) {
      const filterMovies = movies
        .filter(({ bookmarked }) => bookmarkedOnly === bookmarked);
      return filterMovies;
    }
    if (searchText !== '') {
      const filterMovies = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText) || subtitle.includes(searchText) || storyline
          .includes(searchText)
      ));
      return filterMovies;
    }
    return movies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    const filterMovies = this.filterMovies();
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filterMovies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
