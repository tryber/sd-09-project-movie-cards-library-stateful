import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    };

    this.handleSearchBar = this.handleSearchBar.bind(this);
    this.handleBookMarked = this.handleBookMarked.bind(this);
    this.handleonSelectedGenre = this.handleonSelectedGenre.bind(this);
  }

  handleSearchBar({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  handleBookMarked({ target }) {
    const { id } = target;
    const value = target.checked;
    this.setState({
      [id]: value,
    });
  }

  handleonSelectedGenre({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchBar }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleonSelectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MovieLibrary;
