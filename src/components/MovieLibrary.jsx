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
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies,
    };
    this.addMovieToList = this.addMovieToList.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.searchText = this.searchText.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onSearchTextChange(event) {
    const search = event.target.value;
    this.setState((lastState) => ({ searchText: `${lastState.searchText}${search}` }));
    this.searchText();
  }

  onBookmarkedChange() {
    // const { checked } = event.target;
    // this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange() {

  }

  selectedGenre() {

  }

  bookmarkedOnly() {

  }

  searchText() {
  }

  addMovieToList(movieObject) {
    const { movies } = this.state;
    movies.push(movieObject);
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          selectedGenre={ this.selectedGenre }
          bookmarkedOnly={ this.bookmarkedOnly }
          searchText={ this.searchText }
        />
        <MovieList movies={ movies } />
        <AddMovie addMovieToList={ this.addMovieToList } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) }.isRequired;

export default MovieLibrary;
