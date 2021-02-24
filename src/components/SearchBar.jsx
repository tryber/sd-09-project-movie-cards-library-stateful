import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="search-text"
            id="search-text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </label>
        <label htmlFor="bookmark" data-testid="text-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            id="bookmark"
            value={searchText}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
