import React, { Component } from 'react';

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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterByMovies = this.filterByMovies.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    if (checked) {
    this.setState({
      bookmarkedOnly: true,
    });
  } else {
    this.setState({
      bookmarkedOnly: false,
    });
  }
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  filterByMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state
    let filterMovies = movies;
    if (searchText) {
      filterMovies = movies
      .filter((movie => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)));
    }
    if (bookmarkedOnly) {
      filterMovies = movies
      .filter((movie => movie.bookmarked === true))
    }
    if (selectedGenre) {
      filterMovies = movies
      .filter((movie => movie.genre === selectedGenre))
    }
      return filterMovies;
  }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filterByMovies();
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
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick }/>
      </div>
    );
  }
}

export default MovieLibrary;
