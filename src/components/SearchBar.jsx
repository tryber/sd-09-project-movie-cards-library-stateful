// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="input-searchText" data-testid="text-input-label">
            Inclui o texto
            <input
              type="text"
              id="input-searchText"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
            <input
              type="checkbox"
              id="input-checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
            Mostrar somente favoritos
          </label>
          <label htmlFor="select-genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={ selectedGenre }
              id="select-genre"
              data-testid="select-input"
              onChange={ onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: false,
  onBookmarkedChange: () => {},
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
