import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  // eslint-disable-next-line max-lines-per-function
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <div>
          <label data-testid="text-input-label">Inclui o texto:</label>
        </div>
        <div>
          <input
            data-testid="text-input"
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </div>
        <div>
          <label data-testid="checkbox-input-label">
            <input
              data-testid="checkbox-input"
              type="checkbox"
              name="bookmarkedOnly"
              checked={ bookmarkedOnly } 
              onChange={ onBookmarkedChange }
            />
            Mostrar somente favoritos
          </label>
          <div>
            <label data-testid="select-input-label">
              Filtrar por gênero
            </label>
          </div>
          <div>
            <select
              data-testid="select-input"
              name="selectedGenre"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </div>
        </div>
      </form>
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
