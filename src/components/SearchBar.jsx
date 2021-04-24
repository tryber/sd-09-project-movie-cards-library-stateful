// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onBookmarkedChange, onSelectedGenreChange, onSearchTextChange } = this.props;

    return (
      <form data-testid="search-bar-form">

        <label htmlFor="text" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            onChange={ onSearchTextChange }
            type="text"
            name={ searchText }
            value={ searchText }
          />
        </label>

        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            type="checkbox"
            name={ bookmarkedOnly }
          />
        </label>

        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            name={ selectedGenre }
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >

            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>

          </select>
        </label>

      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.checkPropTypes,
  selectedGenre: PropTypes.string,
  onBookmarkedChange: PropTypes.func,
  onSearchTextChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
