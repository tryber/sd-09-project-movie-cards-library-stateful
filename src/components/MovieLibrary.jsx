import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ 0 }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ 0 }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ 0 }
        />
        <MovieList movies={ movies } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieLibrary;
