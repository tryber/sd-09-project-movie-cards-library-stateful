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

    this.insertMovie = this.insertMovie.bind(this);
  }

  insertMovie(newMovie) {
    const { movies } = this.state;
    newMovie.rating = parseFloat(newMovie.rating);

    this.setState({
      movies: [...movies, newMovie],
    });
    // Essa função vai adicionar os dados do state de Add movie na lista de movies no data.js
    // o newMovie contém a nova informação adicionada no AddMovie
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie onClick={ this.insertMovie } />
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
