import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
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

  handleSearchTextChange(searchText) {
    this.setState({ searchText });
  }

  bookmarkedChange(bookmarkedOnly) {
    this.setState({ bookmarkedOnly });
  }

  selectedGenreChange(selectedGenre) {
    this.setState({ selectedGenre });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (value) => this.handleSearchTextChange(value) }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (value) => this.bookmarkedChange(value) }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (value) => this.selectedGenreChange(value) }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
