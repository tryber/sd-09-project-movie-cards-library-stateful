// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = 0;
  }

  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-id">
          Inclui o texto
          <input
            type="text"
            id="text-id"
            onChange={ onSearchTextChange }
            data-testid="text-input"
            value={ searchText }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.func.isRequired,
};

export default SearchBar;
