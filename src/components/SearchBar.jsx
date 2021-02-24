// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText,
            onSearchTextChange,
            bookmarkedOnly,
            onBookmarkedChange,
            selectedGenre,
            onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          id="input-text"
          data-testid="text-input"
        />
        <label htmlFor="favoritos"data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>
        <input
          type="checkbox"
          name=""
          id="favoritos"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
        <label htmlFor="genero" data-testid="select-input-label">
          Filtrar por gênero
        </label>
        <select
          name="genero"
          id="genero"
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
