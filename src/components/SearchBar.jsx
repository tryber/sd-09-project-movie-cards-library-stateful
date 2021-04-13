import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  createInputText(searchText, onSearchTextChange) {
    return (
      <label
        data-testid="text-input-label"
        htmlFor="searchTitle"
      >
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchTitle"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  createCheckboxText(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label
        data-testid="checkbox-input-label"
        htmlFor="favoriteMovieSearch"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="favoriteMovieSearch"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  createSelect(selectedGenre, onSelectedGenreChange) {
    return (
      <label
        data-testid="select-input-label"
        htmlFor="selectGenre"
      >
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="selectGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          {this.createInputText(searchText, onSearchTextChange)}
          {this.createCheckboxText(bookmarkedOnly, onBookmarkedChange)}
          {this.createSelect(selectedGenre, onSelectedGenreChange)}
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
