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
      favoritedsMovies: movies.filter((movie) => movie.bookmarked === true),
      genreMovies: [],
      searchBarMovies: [],

    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const { value } = target;
    this.setState({
      searchText: value,
      searchBarMovies: movies.filter((movie) => movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value)),

    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,

    });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { value } = target;
    this.setState({
      selectedGenre: value,
      genreMovies: movies.filter((movie) => movie.genre === value),

    });
  }

  onClick() { }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { favoritedsMovies, genreMovies, searchBarMovies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />

        { searchText !== '' && <MovieList movies={ searchBarMovies } /> }
        { bookmarkedOnly !== false && <MovieList movies={ favoritedsMovies } /> }
        { selectedGenre !== '' && <MovieList movies={ genreMovies } /> }
        { searchText === '' && bookmarkedOnly === false &&
          selectedGenre === '' &&
          <MovieList movies={ movies } />}
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default MovieLibrary;
