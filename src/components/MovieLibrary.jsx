// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...this.props.movies],
    };
  }

  updateState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((prevState) => {
      return {
        prevState,
        [name]: value,
      };
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.updateState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateState } />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
};

export default MovieLibrary;
