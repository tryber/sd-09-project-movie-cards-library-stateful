import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleInput = this.handleInput.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleInput(event, name) {
    const { target: { value, type, checked } } = event;
    const stateValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: stateValue }, () => this.filterMovies());
  }

  filterMovies() {
    const { state: { searchText, bookmarkedOnly, selectedGenre } } = this;
    const { props: { movies } } = this;
    let newMovies = [...movies];
    if (bookmarkedOnly) {
      newMovies = newMovies.filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre) {
      newMovies = newMovies.filter(({ genre }) => genre === selectedGenre);
    }
    if (searchText) {
      newMovies = newMovies.filter(({ title, subtitle, storyline }) => {
        return (
          title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)
        );
      });
    }
    this.setState({ movies: newMovies });
  }

  render() {
    const { state: { searchText, bookmarkedOnly, selectedGenre, movies } } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => this.handleInput(event, 'searchText') }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => this.handleInput(event, 'bookmarkedOnly') }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => this.handleInput(event, 'selectedGenre') }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
