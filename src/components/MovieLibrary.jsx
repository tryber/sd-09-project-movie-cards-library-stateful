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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filterResult = movies;
    if (bookmarkedOnly) {
      filterResult = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      filterResult = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText) {
      filterResult = movies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    return filterResult;
  }

  newMovie(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      filteredMovies,
      newMovie,
    } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ filteredMovies() } />
        <AddMovie onClick={ newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
