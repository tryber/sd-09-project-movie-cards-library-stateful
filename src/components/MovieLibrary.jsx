// implement AddMovie component here
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
    this.handleChange= this.handleChange.bind(this);
  }

  handleChange({ target }) { // requisito 17
    const { name } = target; // requisito 17
    const value = target.type === 'checkbox' ? target.checked : target.value; // requisito 17

    if (!value) {
      if (this.setState({ [name]: false })) {
        this.setState({ [name]: true });
      } this.setState({ [name]: false }); // requisito 17
    } this.setState({ [name]: value }); // requisito 17
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange } // requisito 17
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange } // requisito 17
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange } // requisito 17
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export default MovieLibrary;
