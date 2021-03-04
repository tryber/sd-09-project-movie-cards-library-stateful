import React, { Component } from 'react';

import Input from './Input';
import GenreType from './GenreType';

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
      <form data-testid="search-bar-form">
        <Input
          label='Inclui o texto:'
          type='text'
          name='search-text'
          value={ searchText }
          onChange={ onSearchTextChange }
          testLabel='text-input-label'
          test='text-input'
        />
        <label htmlFor="bookmark" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            id="bookmark"
            name="bookmark"
            value={ searchText }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <GenreType
          label='Filtrar por gênero'
          name='select'
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          testLabel='select-input-label'
          test='select-input'
          testOption='select-option'
        />
      </form>
    );
  }
}

export default SearchBar;
