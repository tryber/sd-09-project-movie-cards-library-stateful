// implement AddMovie component here
import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form" />
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};

export default SearchBar;
