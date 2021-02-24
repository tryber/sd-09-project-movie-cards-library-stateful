
// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  textSearchBar() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="include" data-testid="text-input-label">
        <span>Inclui o texto</span>
        <input
          onChange={ onSearchTextChange }
          value={ searchText }
          data-testid="text-input"
          type="text"
          name="searchText"
          id="searchText"
        />
      </label>
    );
  }

  bookmarkedField() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        className="bookmarked"
        htmlFor="bookmarkedOnly"
        data-testid="checkbox-input-label"
      >
        <input
          type="checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          name="bookmarkedOnly"
          id="bookmarkedOnly"
        />
        <span>Mostrar somente favoritos</span>
      </label>
    );
  }

  selectField() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="selectedGenre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="selectedGenre"
          data-testid="select-input"
          onChange={ onSelectedGenreChange }
          value={ selectedGenre }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form className="search-bar-form" data-testid="search-bar-form">
        {this.textSearchBar()}
        {this.bookmarkedField()}
        {this.selectField()}
      </form>
    );
  }
}

export default SearchBar