// implement AddMovie component here
import React from 'react';
import onSearchTextChange from './onSearchTextChange';
import onBookMarkedChange from './onBookMarkedChange';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      // selectedGenre: '',
      // bookmarkedOnly: false,
      searchText: '',
    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <form data-testid="search-bar-form">
          <span>
            Inclui o texto:
            <input
              data-testid="text-input"
              name="nome"
              value={ searchText }
              onChange={ onSearchTextChange }
              type="text"
            />
          </span>
          <span>
            Mostrar somente favoritos
            <input data-testid="checkbox-input-label" checked="bookmarkedOnly" onChange={ onBookMarkedChange } type="checkbox" />
          </span>
        </form>
      </div>
    );
  }
}
