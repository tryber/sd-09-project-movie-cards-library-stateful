// implement AddMovie component here
import React, { Component } from "react";
import PropTypes, { func } from "prop-types";

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange
    } = this.props;

    return (
      <fieldset>
        <caption>Pesquise</caption>
        <form data-testid="search-bar-form">
          <div>
            <label data-testid="text-input-label">Inclui o texto:</label>
            <input
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </div>
          <div>
            <label data-testid="checkbox-input-label">
              Mostrar somente favoritos
            </label>
            <input
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              data-testid="checkbox-input"
            />
          </div>
        </form>
      </fieldset>
    );
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
