// implement AddMovie component here
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

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(e) {
    const { value } = e.target;
    const { searchText, movies } = this.state;

    this.setState({
      searchText: value,
      movies: movies
        .filter((movie) => JSON.stringify(movie).toUpperCase()
          .includes(searchText.toUpperCase())),
    });
  }

  onBookmarkedChange(e) {
    const { type, checked } = e.target;
    const { movies } = this.props;

    const value = type === 'checkbox' ? checked : e.target.value;

    this.setState({
      bookmarkedOnly: value,
      movies: ((checked) ? movies
        .filter((movie) => movie.bookmarked === value) : movies),
    });
  }

  onSelectedGenreChange(e) {
    const { movies } = this.props;
    const { value } = e.target;
    this.setState({
      selectedGenre: value,
      movies: ((value) ? movies
        .filter((movie) => movie.genre === value) : movies),
    });
  }

  onClick(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
    const form = document.querySelector('form');
    form.reset();
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;