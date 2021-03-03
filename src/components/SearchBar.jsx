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
            <input
              data-testid="text-input"
              onChange={ onSearchTextChange }
              value={ searchText }
              type="text"
              id="inputText"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="inputBookMarked">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              onChange={ onBookmarkedChange }
              checked={ bookmarkedOnly }
              type="checkbox"
              id="inputBookMarked"
            />
          </label>
          <label data-testid="select-input-label" htmlFor="inputSelect">
            Filtrar por gênero
            <select
              data-testid="select-input"
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
              id="inputSelect"
            >
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
