// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
            <input
              data-testid="text-input"
              name="nome"
              htmlFor="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
              type="text"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox">
            Mostrar somente favoritos
            <input
              id="checkbox-input"
              data-testid="checkbox-input"
              htmlFor="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              type="checkbox"
            />
          </label>
          <label data-testid="select-input-label" htmlFor="select-input">
            Filtrar por gênero
            <select
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              id="select-input"
            >
              <option data-testid="select-option">Todos</option>
              <option data-testid="select-option">Ação</option>
              <option data-testid="select-option">Comédia</option>
              <option data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
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
