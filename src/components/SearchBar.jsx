import React, { Component } from 'react';

class SearchBar extends Component {
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
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="search-text"
            id="search-text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </label>
        <label htmlFor="bookmark" data-testid="text-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            id="bookmark"
            value={searchText}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label>
        <div>
          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
          </label>
          <select
            name="genre"
            id="genre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thiller">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
