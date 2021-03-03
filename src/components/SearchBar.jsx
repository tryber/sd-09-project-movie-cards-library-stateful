// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange, bookmarkedOnly } = this.props;
    const { onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form" id="inputText">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              onChange={ onSearchTextChange }
              value={ searchText }
              type="text"
              name="searchText"
              id="inputText"/>
          </label>
          <label data-testid="checkbox-input-label" id="inputBookMarked">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              onChange={ onBookmarkedChange }
              checked={ bookmarkedOnly }
              type="checkbox"
              name="bookmarkedOnly"
              id="inputBookMarked"/>
          </label>
          <label data-testid="select-input-label" id="inputSelectInput">
            Filtrar por gênero
            <select
              data-testid="select-input"
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
              name="selectedGenre"
              id="inputSelectInput">
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
