// implement AddMovie component here
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
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="firstInput" data-testid="text-input-label">
            <h4>Inclui o texto:</h4>
            <input
              id="firstInput"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default SearchBar;
