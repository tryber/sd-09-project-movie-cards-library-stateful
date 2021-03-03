import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            itemID="text-input"
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            itemID="checkbox-input"
          />
        </label>
        <label htmlFor="selected-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            itemID="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
}.isRequired;

export default SearchBar;
