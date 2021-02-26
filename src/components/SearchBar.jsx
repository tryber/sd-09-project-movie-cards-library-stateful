import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form action='' data-testid='search-bar-form'>
        <label htmlFor='test-input' data-testid='text-input-label'>
          Inclui o texto
        </label>
        <input
          type='text'
          id='text-input'
          data-testid='text-input'
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        <label htmlFor='checkbox-input' data-testid='checkbox-input-label'>
          Mostrar somente favoritos
        </label>
        <input
          type='checkbox'
          name=''
          id='checkbox-input'
          data-testid='checkbox-input'
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        <label htmlFor='select-input' data-testid='select-input-label'>
          Filtrar por gênero
        </label>
        <select
          name=''
          id='select-input'
          data-testid='select-input'
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
        >
          <option data-testid='select-option' value="">Todos</option>
          <option data-testid='select-option' value="action">Ação</option>
          <option data-testid='select-option' value="comedy">Comédia</option>
          <option data-testid='select-option' value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
