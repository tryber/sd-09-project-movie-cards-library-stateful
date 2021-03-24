// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
// import TextInputLabelSearch from './TextInputLabelSearch';
// import CheckboxInputSearch from './CheckboxInputSearch';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchtext">
            Inclui o texto:
            <input
              type="text"
              data-testid="text-input"
              id="searchText"
              name="searchText"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox_control">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="bookmarkedOnly"
              id="checkbox-input"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <label data-testid="select-input-label" htmlFor="select-input">
            Filtrar por gênero
            <select
              name="selectedGenre"
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              htmlFor="select-input"
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

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
