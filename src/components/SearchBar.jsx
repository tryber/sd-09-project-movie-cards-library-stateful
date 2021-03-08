// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search">
          Inclui o texto
          <input data-testid="text-input" type="text" name="" id="search" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
