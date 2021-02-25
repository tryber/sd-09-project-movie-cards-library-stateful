import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="includes-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            name="searchText"
            itemID="includes-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
            data-testid="text-input"
          />
        </label>
        <label htmlFor="only-favorites" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            itemID="only-favorites"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            type="checkbox"
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="filter-gender" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            itemID="filter-gender"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

const { string, func, bool } = PropTypes;
SearchBar.propTypes = {
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
  bookmarkedOnly: bool.isRequired,
  onBookmarkedChange: func.isRequired,
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,
};

export default SearchBar;
