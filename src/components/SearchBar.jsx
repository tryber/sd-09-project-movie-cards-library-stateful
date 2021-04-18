// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <label htmlFor="searchtext" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchtext"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="mostrar" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="mostrar"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            name=""
            id=""
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
