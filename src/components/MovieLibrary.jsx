import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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
    this.addMovie = this.addMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  // creditos da onsearchtextchange e onselectedgenrechange do Wagner, turma 8

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filter = movies.filter((element) => element.title.includes(value)
      || element.subtitle.includes(value)
      || element.storyline.includes(value));
    this.setState({
      searchText: value,
      movies: filter,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.state;
    const movieFilter = movies.filter((el) => el.bookmarked === checked);
    this.setState({
      bookmarkedOnly: checked,
      movies: movieFilter,
    });
    console.log(movieFilter);
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filter = movies.filter((element) => element.genre === value);
    this.setState({
      selectedGenre: value,
      movies: filter,
    });
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
