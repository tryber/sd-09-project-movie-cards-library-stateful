import React from 'react';
import { string, func, bool } from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.createSelect = this.createSelect.bind(this);
  }

  createSelect(selectedGenre, onSelectedGenreChange) {
    return (
      <select
        id="select-input"
        name="select-input"
        data-testid="select-input"
        value={ selectedGenre }
        onChange={ onSelectedGenreChange }
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }

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
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto
            <input
              type="text"
              id="text-input"
              name="text-input"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>

          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              id="checkbox-input"
              name="checkbox-input"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>

          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            { this.createSelect(selectedGenre, onSelectedGenreChange) }
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
  bookmarkedOnly: bool.isRequired,
  onBookmarkedChange: func.isRequired,
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,
};

export default SearchBar;
