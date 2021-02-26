// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = 0;
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-id" >Inclui o texto:</label>
        <input type="text" id="text-id" onChange={ this.props.onSearchTextChange } data-testid="text-input" value={this.props.searchText} />
      </form>
    );
  }
}

export default SearchBar;
