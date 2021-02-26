import React, { Component } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'action',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState(({
      bookmarkedOnly: target.checked,
    }));
  }

  onSelectedGenreChange() {
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this;
    const checkFilter = movies.filter(({ bookmarked }) => bookmarked === true);
    const moviesFiltred = movies.filter(({ title }) => title.includes(searchText));

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ moviesFiltred } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
