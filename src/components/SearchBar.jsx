import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { 
        searchText,
        bookmarkedOnly,
        selectedGenre,
        onSearchTextChange,
        onBookmarkedChange,
        onSelectedGenreChange 
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="tipedText">
          Inclui o texto:
          <input
            id="tipedText"
            type="text"
            data-testid="text-input-label"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}
export default SearchBar;
