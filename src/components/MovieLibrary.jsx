import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.AddMovie = this.AddMovie.bind(this);
    this.upSearch = this.upSearch.bind(this);
    this.upBook = this.upBook.bind(this);
    this.upSelect = this.upSelect.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  AddMovie(movieToAdd) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movieToAdd],
    });
  }

  upSearch(content) {
    const { value } = content.target;
    this.setState({ searchText: value });
  }

  upBook() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  upSelect(element) {
    const { value } = element.target;
    this.setState({ selectedGenre: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.upSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.upBook }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.upSelect }
        />

        <MovieList movies={ movies } />

        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
