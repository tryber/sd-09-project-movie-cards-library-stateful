import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div className="form">
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
          </label>
          <input
            id="text-input"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />

          <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
            Mostrar somente favoritos
          </label>
          <input
            type="checkbox"
            data-testid="checkbox-input"
            id="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />

          <label data-testid="select-input-label" htmlFor="select">
            Filtrar por gênero
          </label>
          <select 
            value={ selectedGenre }
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            id="select"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>

        </form>

      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.IsRequired,
  bookmarkedOnly: PropTypes.string.IsRequired,
  selectedGenre: PropTypes.string.IsRequired,
  onSearchTextChange: PropTypes.func.IsRequired,
  onBookmarkedChange: PropTypes.func.IsRequired,
  onSelectedGenreChange: PropTypes.func.IsRequired,

}.IsRequired;

export default SearchBar;
