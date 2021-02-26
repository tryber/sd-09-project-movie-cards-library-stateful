// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {

    const {searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,} = this.props;

    return(
      <>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto: </label>
          <input
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"></input>

          <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"></input>

          <label data-testid="select-input-label">Filtrar por gênero</label>
          <select
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </form>
      </>
    );
  }
}

export default SearchBar;
