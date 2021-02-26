// implement AddMovie component here
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { genres } from '../extraData';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="movieSearch">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="filterByFavorites">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="movieGenreSearch">
          Filtrar por gênero
          <select
            data-testid="select-input"
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            { genres.map(({ name, value }) => (
              <option data-testid="select-option" value={ value } key={ name }>
                { name }
              </option>)) }
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
