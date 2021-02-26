import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange = () => {};

  onBookmarkedChange = () => {};

  onSelectedGenreChange = () => {};

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange=""
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange=""
          selectedGenre={ selectedGenre }
          onSelectedGenreChange=""
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onSearchTextChange } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
