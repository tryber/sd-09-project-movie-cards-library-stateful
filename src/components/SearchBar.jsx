import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      // onSearchTextChange: undefined,
      bookmarkedOnly: false,
      // onBookmarkedChange: undefined,
      selectedGenre: 'Todos',
      // onSelectedGenreChange: undefined,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <form data-testid="search-bar-form">
        {/* LINT ISSUE: error  A form label must be associated with a control */}
        {/* Resolved from the source:  https://github.com/airbnb/javascript/issues/1885 */}
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto
          <input
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ this.handleChange }
            data-testid="text-input"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ this.handleChange }
            data-testid="checkbox-input"
          />
        </label>

        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            name="selectedGenre"
            onChange={ this.handleChange }
            data-testid="select-input"
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

export default SearchBar;
