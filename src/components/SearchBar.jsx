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
          <label htmlFor="firstInput">
            <h4>Digite o nome do filme</h4>
            <input id="firstInput" type="text" />
          </label>
        </form>
      </section>
    );
  }
}

export default SearchBar;
