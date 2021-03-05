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
    this.filterMovies = this.filterMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  changeHandler(event) {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      this.setState({ bookmarkedOnly: checked });
    } else {
      this.setState({ [name]: value });
    }
  }

  filterByText(search, title, subtitle, storyline) {
    return (title.includes(search)
        || subtitle.includes(search)
        || storyline.includes(search));
  }

  filterByBookmark(bookmark) {
    return bookmark === true;
  }

  filterByGenre(selectedGenre, itemGenre) {
    return itemGenre.includes(selectedGenre);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredMovies = movies
      .filter(({ title, subtitle, storyline, bookmarked, genre }) => {
        if (bookmarkedOnly) {
          return (this.filterByText(searchText, title, subtitle, storyline)
          && this.filterByGenre(selectedGenre, genre)
          && this.filterByBookmark(bookmarked));
        }
        return (this.filterByText(searchText, title, subtitle, storyline)
        && this.filterByGenre(selectedGenre, genre));
      });
    return filteredMovies;
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addNewMovie } />
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
