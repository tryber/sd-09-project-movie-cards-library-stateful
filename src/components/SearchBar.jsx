import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            value={searchText}
            type="text"
            onChange={onSearchTextChange}
            data-testid="text-input" />
        </label>

        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input" />
        </label>

        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option"value="action">Ação</option>
            <option data-testid="select-option"value="comedy">Comédia</option>
            <option data-testid="select-option"value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;