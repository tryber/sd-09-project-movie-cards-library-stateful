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
    this.onClick = this.onClick.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.callback = this.callback.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange(event) {
    const { movies } = this.props;
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      movies: ((target.checked) ? movies
        .filter((item) => item.bookmarked === value) : movies),
    });
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, state] });
  }

  callback(filme) {
    const { searchText, selectedGenre } = this.state;
    const verify = filme.title.includes(searchText)
    || filme.subtitle.includes(searchText)
    || filme.storyline.includes(searchText);
    if (searchText !== '' && verify) return true;
    if (filme.genre === selectedGenre) return true;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtrado = movies.filter(this.callback);
    if (filtrado.length === 0) filtrado = movies;
    console.log(filtrado);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSearchTextChange }
          onSearchTextChange={ this.onSearchTextChange }
        />
        <MovieList movies={ filtrado } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
