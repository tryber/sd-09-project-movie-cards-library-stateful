// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.handleChangeLibrary = this.handleChangeLibrary.bind(this);
    this.onclick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChangeLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // declação coringa vista no conteudo
    this.setState({
      [name]: value,
    });
  }

  onClick(mv) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, mv],
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeLibrary }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeLibrary }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeLibrary }
        />
        <AddMovie onClick={ this.onclick } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
