// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    const genres = [
      { name: 'Todos', value: '' },
      { name: 'Ação', value: 'action' },
      { name: 'Comédia', value: 'comedy' },
      { name: 'Suspense', value: 'thriller' },
    ];
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="movieSearch">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="filterByFavorites">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="movieGenreSearch">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            { genres.map(({ name, value }) => (
              <option data-testid="select-option" value={ value } key={ name }>
                { name }
              </option>))}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
