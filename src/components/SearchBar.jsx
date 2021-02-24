import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
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
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchInput">
            Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="searchInput"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="bookmarkInput">
            Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="bookmarkInput"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="genreSelect">
            Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            id="genreSelect"
          >
            <option value="" data-testid="select-option"> Todos </option>
            <option value="action" data-testid="select-option"> Ação </option>
            <option value="comedy" data-testid="select-option"> Comédia </option>
            <option value="thriller" data-testid="select-option"> Suspense </option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = ({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}).isRequired;

export default SearchBar;
