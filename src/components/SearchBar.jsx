// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

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
      <fieldset>
        <legend>Pesquise</legend>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            <span>Inclui o texto:</span>
            <input
              type="text"
              id="searchText"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            <span>Mostrar somente favoritos</span>
            <input
              type="checkbox"
              id="bookmarkedOnly"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="selectedGenre" data-testid="select-input-label">
            <span>Filtrar por gênero</span>
            <select
              value={ selectedGenre }
              id="selectedGenre"
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
            >
              <option data-testid="select-option" value="">
                Todos
              </option>
              <option data-testid="select-option" value="action">
                Ação
              </option>
              <option data-testid="select-option" value="comedy">
                Comédia
              </option>
              <option data-testid="select-option" value="thriller">
                Suspense
              </option>
            </select>
          </label>
        </form>
      </fieldset>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: func.isRequired,
};

export default SearchBar;
