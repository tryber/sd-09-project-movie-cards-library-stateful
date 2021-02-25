// implement AddMovie component here
// estrutura
import React from 'react';

let searchText;
let onSearchTextChange;
let bookmarkedOnly;
let onBookmarkedChange;
let selectedGenre;
let onSelectedGenreChange;

const SearchBar = () => (
  <form data-testid="search-bar-form">
    <label htmlFor="addText" data-testid="text-input-label">
      Inclui o texto:
      <input type="text"
        id="addText" value={ searchText } onChange={ onSearchTextChange }
        data-testid="text-input"
      />
    </label>
    <label htmlFor="Fav" data-testid="checkbox-input-label">
      Mostrar somente favoritos
      <input type="checkbox"
        id="Fav" checked={ bookmarkedOnly } onChange={ onBookmarkedChange }
        data-testid="checkbox-input"
      />
    </label>
    <label htmlFor="filterGenre"  data-testid="select-input-label">
      Filtrar por gênero
      <select data-testid="select-input"
      id="filterGenre" value={ selectedGenre } onChange={ onSelectedGenreChange }
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    </label>
  </form>
);

export default SearchBar;
