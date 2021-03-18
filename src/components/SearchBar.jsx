// implement AddMovie component here
import React from 'react';
import onSearchTextChange from './onSearchTextChange';
import onBookMarkedChange from './onBookMarkedChange';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      // selectedGenre: '',
      bookmarkedOnly: false,
      searchText: '',
    };
  }

  render() {
    const { searchText, bookmarkedOnly } = this.state;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="input-text">
            Inclui o texto:
            <input
              data-testid="text-input"
              name="nome"
              htmlFor="input-text"
              value={ searchText }
              onChange={ onSearchTextChange }
              type="text"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              htmlFor="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookMarkedChange }
              type="checkbox"
            />
          </label>
        </form>
      </div>
    );
  }
}
