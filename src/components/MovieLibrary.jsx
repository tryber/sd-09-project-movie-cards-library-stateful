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
    };
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.movieByFilter = this.movieByFilter.bind(this);
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    if (checked) this.setState({ bookmarkedOnly: true });
    if (!checked) this.setState({ bookmarkedOnly: false });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  movieByFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let moviesListFiltered = movies;
    if (searchText !== '') {
      moviesListFiltered = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)));
    }
    if (bookmarkedOnly) {
      moviesListFiltered = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      moviesListFiltered = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return moviesListFiltered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.movieByFilter();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
          searchText={ searchText }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) }.isRequired;

export default MovieLibrary;
