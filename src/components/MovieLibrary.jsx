import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.searchTextChange = this.searchTextChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.changeMovies = this.changeMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  searchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  bookmarkedChange({ target }) {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ bookmarkedOnly: value });
  }

  selectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  changeMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      return movies.filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)
      ));
    }

    return movies;
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;

    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.changeMovies();

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
};

export default MovieLibrary;
