// implement AddMovie component here
import React from 'react';
import onSearchTextChange from './onSearchTextChange';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedGenre: '',
    bookmarkedOnly: false,
      searchText: ''
    };
  }

  onSearchTextChange(event.target) {
    
  }

  render(){
    <div>
      <form>
        <onSearchTextChange value={this.state.searchText} onChange={this.onSearchTextChange}>
      </form>
    </div>
  }
}