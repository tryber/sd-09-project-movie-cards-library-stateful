import React, { Component } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const {
      onSearchTextChange, onBookmarkedChange, onSelectedGenreChange, onClick,
    } = this;
    function filterMovies() {
      const moviesFiltred = movies
        .filter(({ storyline, subtitle, title }) => (storyline.includes(searchText)
          || subtitle.includes(searchText)
          || title.includes(searchText)))
        .filter(({ genre }) => genre.includes(selectedGenre));
      if (bookmarkedOnly) {
        return moviesFiltred.filter(({ bookmarked }) => bookmarked === true)
          .filter(({ genre }) => genre.includes(selectedGenre));
      }
      return moviesFiltred;
    }
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
        <MovieList movies={ filterMovies() } />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
