import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          "Inclui o texto:"
          <input
          data-testid="text-input"
          id="text-input"
          value={searchText}
          onChange={onSearchTextChange}
          type="text"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          "Mostrar somente favoritos"
          <input
          data-testid="checkbox-input"
          id="checkbox-input"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          type="checkbox"
          />
        </label>

        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
          data-testid="select-input"
          id="select-input"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
