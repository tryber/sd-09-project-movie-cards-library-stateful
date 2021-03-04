// implement AddMovie component here
import React, { Component } from 'react';
// import MovieList from './MovieList';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.prepareteSearchText = this.prepareteSearchText.bind(this);
    this.prepareteBokmarkedOnly = this.prepareteBokmarkedOnly.bind(this);
  }

  prepareteSearchText(searchText, onSearchTextChange) {
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="searchText"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          type="text"
          data-testid="text-input"
        />
      </label>
    );
  }

  prepareteBokmarkedOnly(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="bookmarkedOnly"
          name="bookmarkedOnly"
          value={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          type="checkbox"
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  prepareteSelectGenre(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="selectedGenre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="selectedGenre"
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
        { this.prepareteSearchText(searchText, onSearchTextChange) }
        { this.prepareteBokmarkedOnly(bookmarkedOnly, onBookmarkedChange) }
        { this.prepareteSelectGenre(selectedGenre, onSelectedGenreChange) }
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
