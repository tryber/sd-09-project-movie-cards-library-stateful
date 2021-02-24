// implement AddMovie component here
import React, { Component } from "react";
import PropTypes, { func } from "prop-types";

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
      <fieldset>
        <legend>Pesquise</legend>
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
          <div>
            <label data-testid="select-input-label">Filtrar por gênero</label>
            <select
              value={selectedGenre}
              onChange={onSelectedGenreChange}
              data-testid="select-input"
            >
              <option data-testid="select-option" value="">
                Todos
              </option>
              <option data-testid="select-option" value="action">
                Ação
              </option>
              <option data-testid="select-option" value="comedy">
                Comédia
              </option>
              <option data-testid="select-option" value="thriller">
                Suspense
              </option>
            </select>
          </div>
        </form>
      </fieldset>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: func
};

export default SearchBar;
