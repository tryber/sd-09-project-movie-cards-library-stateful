import React, { Component } from 'react';
import { string, func, bool } from 'prop-types';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.warningDefaultProp = 'Must specify a function for controled input';
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
        <label htmlFor="search-bar-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="search-bar-input"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="search-bar-checkbox" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            id="search-bar-checkbox"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <label htmlFor="genre-filter" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="genre-filter"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: string,
  onSearchTextChange: func,
  bookmarkedOnly: bool,
  onBookmarkedChange: func,
  selectedGenre: string,
  onSelectedGenreChange: func,
};

SearchBar.defaultProps = {
  searchText: 'Value of input',
  onSearchTextChange: () => SearchBar.warningDefaultProp,
  bookmarkedOnly: false,
  onBookmarkedChange: () => SearchBar.warningDefaultProp,
  selectedGenre: 'Value of selected option',
  onSelectedGenreChange: () => SearchBar.warningDefaultProp,
};
