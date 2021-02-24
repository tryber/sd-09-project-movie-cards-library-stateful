import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input data-testid="text-input"
              type="text"
              value="searchText"
              onChange="onSearchTextChange"
            />
          </label>
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input data-testid="checkbox-input"
              type="checkbox"
              checked="bookmarkedOnly"
              onChange="onBookmarkedChange"
            />
          </label>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select data-testid="select-input"
              value="selectedGenre"
              onChange="onSelectedGenreChange"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </section>
    )
  }
}

export default SearchBar;
