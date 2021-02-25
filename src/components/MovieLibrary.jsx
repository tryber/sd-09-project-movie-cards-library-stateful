// implement AddMovie component here
import React, { Component } from 'react';

import SearchBar from './SearchBar';
import { movieLibraryFirstState as firstState } from '../extraData';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = firstState;
    this.changeValues = this.changeValues.bind(this);
  }

  changeValues(event) {
    const { name, value, type, checked } = event.target;
    return type === 'checkbox'
      ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeValues }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeValues }
          selectedGenre={ selectedGenre }
          onSelectedGenre={ this.changeValues }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}

export default MovieLibrary;
