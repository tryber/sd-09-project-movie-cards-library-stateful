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
    this.handlerEvent = this.handlerEvent.bind(this);
    this.filterTextEvent = this.filterTextEvent.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handlerEvent({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
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
          onSearchTextChange={ this.handlerEvent }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handlerEvent }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handlerEvent }
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
