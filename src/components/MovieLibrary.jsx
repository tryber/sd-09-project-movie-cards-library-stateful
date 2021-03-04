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
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      this.setState({ bookmarkedOnly: checked });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeHandler }
        />
        <AddMovie />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
