import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookMarkedOnly,
      onBookMarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="addText" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="addText"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favoritesCheckBox">
          Mostrar somente favoritos
          <input
            id="favoritesCheckBox"
            type="checkbox"
            checked={ bookMarkedOnly }
            onChange={ onBookMarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="byGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="byGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookMarkedOnly: PropTypes.bool.isRequired,
  onBookMarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
