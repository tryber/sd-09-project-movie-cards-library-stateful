import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">Inclui o texto:</label>
        <input type="text" id="searchText" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
      </form>
    );
  }
}

SearchBar.propTypes = {

};

export default SearchBar;
