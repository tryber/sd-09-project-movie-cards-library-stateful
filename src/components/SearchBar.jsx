// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

class SearchBar extends Component {
  render() {
    return(
      <fieldset>
        <caption>Pesquise</caption>
        <form data-testid="search-bar-form"></form>
      </fieldset>
    )
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: func.isRequired
};

export default SearchBar;