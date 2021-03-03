// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange } = this.props;
    const { onSelectedGenreChange, selectedGenre, bookmarkedOnly } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="inputText">
            Inclui o texto:
          </label>
          <input
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
            type="text"
            name="searchText"
            id="inputText" />
          <label data-testid="checkbox-input-label" htmlFor="inputBookMarked">
            Mostrar somente favoritos
          </label>
          <input
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            type="checkbox"
            name="bookmarkedOnly"
            id="inputBookMarked" />
          <label data-testid="select-input-label" htmlFor="inputSelectInput">
            Filtrar por gênero
          </label>
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
