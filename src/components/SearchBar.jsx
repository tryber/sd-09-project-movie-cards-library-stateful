// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              onChange={ this.props.onSearchTextChange }
              value={ this.props.searchText }
              type="text"
              name="searchText"
              id=""/>
          </label>
          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              onChange={ this.props.onBookmarkedChange }
              checked={ this.props.bookmarkedOnly }
              type="checkbox"
              name="bookmarkedOnly"
              id=""/>
          </label>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              onChange={ this.props.onSelectedGenreChange }
              value={ this.props.selectedGenre }
              name="selectedGenre"
              id="">
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
