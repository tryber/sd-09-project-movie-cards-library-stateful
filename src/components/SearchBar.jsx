import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter() {
    
  }

  render() {
    return (
      <input
        value={ this.props.value }
        onChange={ this.handleFilter }
      />
    );
  }
}

export default SearchBar;
