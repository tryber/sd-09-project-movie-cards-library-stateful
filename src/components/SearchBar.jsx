// implement AddMovie component here
import React from 'react';
import onSearchTextChange from './onSearchTextChange';

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
        <onSearchTextChange
          value={ searchText }
          onChange={ this.onSearchTextChange }
        />
      </div>
    );
  }
}
