import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

const INITIAL_STATE = { searchText: '', bookmarkedOnly: false, selectedGenre: '' };

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
  }

  /* handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: value,
    });
  } */

  render() {
    const { movies, searchText } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={ searchText } />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  searchText: PropTypes.string.isRequired,
};

export default MovieLibrary;
