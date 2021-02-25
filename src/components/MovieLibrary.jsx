// implement AddMovie component here
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
        selectedGenre: ''
    }
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

  }

  onSearchTextChange() {};
  onBookmarkedChange() {};
  onSelectedGenreChange() {};


  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={ this.state.searchText } bookmarkedOnly={ this.state.bookmarkedOnly } selectedGenre={ this.state.selectedGenre } />
        <MovieList movies={this.props.movies} />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
