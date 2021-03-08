// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.filterObjectMovies = this.filterObjectMovies.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onClick(stateNewMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, stateNewMovie] });
  }

  filterObjectMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filterMovies = movies.filter((movie) => movie.title.toUpperCase()
      .includes(searchText.toUpperCase())
      || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
      || movie.storyline.toUpperCase().includes(searchText.toUpperCase()));
    if (bookmarkedOnly === true && selectedGenre !== '') {
      return filterMovies
        .filter((movie) => movie.bookmarked === true)
        .filter((movie) => movie.genre === selectedGenre);
    }

    if (bookmarkedOnly === true) {
      return filterMovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      return filterMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filterMovies;
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
        <MovieList movies={ this.filterObjectMovies() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
