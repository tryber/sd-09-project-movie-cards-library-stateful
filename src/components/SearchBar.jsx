import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import '../CSS/search-bar.css';

class SearchBar extends Component {
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
      <div className="form-container">
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
            <input
              name="search-text"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="check-favorite" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              name="check-favorite"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              name="genre"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
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

SearchBar.propTypes = {
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
  bookmarkedOnly: bool.isRequired,
  onBookmarkedChange: func.isRequired,
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,
};

export default SearchBar;
