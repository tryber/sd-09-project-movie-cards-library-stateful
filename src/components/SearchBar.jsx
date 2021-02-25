import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.renderSearch = this.renderSearch.bind(this);
    this.renderCheckbox = this.renderCheckbox.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  renderSearch() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="search-text">
        Inclui o texto:
        <input
          id="search-text"
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  renderCheckbox() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="search-checkbox">
        Mostrar somente favoritos
        <input
          id="search-checkbox"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  renderSelect() {
    const { onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="search-select">
        Filtrar por gênero
        <select
          id="search-select"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.renderSearch() }
        {this.renderCheckbox() }
        {this.renderSelect() }
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
