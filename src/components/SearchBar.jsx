import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component() {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="texto" data-testid="text-input-label" value={ searchText }>
            Inclui o texto
            <input
              name="texto"
              id="texto"
              data-testid="text-input"
              type="text"
              onChange={ onSearchTextChange }
              value={ searchText }
            />
          </label>
          <label htmlFor="check" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              name="check"
              id="check"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="selecao" data-testid="select-input-label">
            Filtrar po gênero
            <select
              id="selecao"
              name="selecao"
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
      </div>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
