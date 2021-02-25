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
    this.searchTextEvent = this.searchTextEvent.bind(this);
    this.bookmarkedOnlyEvent = this.bookmarkedOnlyEvent.bind(this);
    this.selectedGenreEvent = this.selectedGenreEvent.bind(this);
    this.filterTextEvent = this.filterTextEvent.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  searchTextEvent({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  bookmarkedOnlyEvent({ target }) {
    const { name } = target;
    const value = target.checked;
    this.setState({
      [name]: value,
    });
  }

  selectedGenreEvent({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  filterTextEvent() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filter = movies;
    if (searchText) {
      filter = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) filter = movies.filter(({ bookmarked }) => bookmarked === true);

    if (selectedGenre) filter = movies.filter(({ genre }) => genre === selectedGenre);

    return filter;
  }

  render() {
    const movies = this.filterTextEvent();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchTextEvent }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedOnlyEvent }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenreEvent }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
