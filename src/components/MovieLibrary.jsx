import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.HandleChange = this.HandleChange.bind(this);
    this.ListOfMovies = this.ListOfMovies.bind(this);
  }

  HandleChange({ target }) {
    const { name, value } = target;
    if (target.type === 'checkbox') {
      const isBookmarked = target.checked;
      this.setState({ bookmarkedOnly: isBookmarked });
    } else {
      this.setState({ [name]: value });
    }
  }

  ListOfMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let returnedMovies;
    if (!bookmarkedOnly && selectedGenre === '' && searchText === '') {
      returnedMovies = movies;
    }
    if (bookmarkedOnly) {
      returnedMovies = movies.filter((movie) => movie.bookmarked);
    }
    if (searchText !== '') {
      returnedMovies = movies
        .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    if (selectedGenre) {
      returnedMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return returnedMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.ListOfMovies();
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.HandleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.HandleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.HandleChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
