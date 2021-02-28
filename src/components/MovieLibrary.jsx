import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

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

  handleSearchTextChange() {

  }

  bookmarkedChange() {}

  selectedGenreChange() {}

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ () => this.handleSearchTextChange() }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ () => this.bookmarkedChange() }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ () => this.selectedGenreChange() }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
};
export default MovieLibrary;
