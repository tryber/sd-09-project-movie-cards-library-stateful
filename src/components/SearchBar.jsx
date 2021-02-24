// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const searchText = this.props;
    const onSearchTextChange = this.props;
    const bookmarkedOnly = this.props;
    const onBookmarkedChange = this.props;
    const selectedGenre = this.props;
    const onSelectedGenreChange = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-includes" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="text-includes"
            type="text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="bookmarked-only" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="bookmarked-only"
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarks"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="genderfilter" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="genderfilter"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
