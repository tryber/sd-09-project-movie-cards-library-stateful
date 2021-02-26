// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputSearchText(searchText, onSearchTextChange) {
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          name="searchText"
        />
      </label>
    );
  }

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
        <form data-testid="search-bar-form">
          {this.inputSearchText(searchText, onSearchTextChange)}
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              name="bookmarkedOnly"
            />
          </label>
          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
              name="selectedGenre"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </fieldset>
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
}.is.Required;

export default SearchBar;
