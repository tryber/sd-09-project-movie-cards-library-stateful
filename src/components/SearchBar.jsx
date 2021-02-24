import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            "Inclui o texto:"
            <input data-testid="text-input"
              value="searchText"
              onChange="onSearchTextChange"
            />
          </label>
          <label data-testid="checkbox-input-label">
              "Mostrar somente favoritos"
            <input data-testid="checkbox-input"
              checked="bookmarkedOnly"
              onChange="onBookmarkedChange"
            />
          </label>
        </form>
      </div>
    )
  }
}


export default SearchBar;
