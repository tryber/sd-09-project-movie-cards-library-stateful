// implement AddMovie component here
import React, { Component } from 'react';
import Select from './Select';

class SearchBar extends Component {
  render() {
    // Recebendo props;
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="firstInput" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="firstInput"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="secoundInput" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="secoundInput"
              type="checkBox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <Select
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </form>
      </section>
    );
  }
}

export default SearchBar;
