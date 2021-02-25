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
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              id="text-input"
            />
            Inclui o texto:
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              id="checkbox-input"
            />
            Mostrar somente favoritos
          </label>
          <label data-testid="select-input-label" htmlFor="select-input">
            <select
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              id="select-input"
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
            Filtrar por gênero
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
