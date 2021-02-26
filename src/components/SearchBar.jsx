// implement AddMovie component here
// import { render } from '@testing-library/react';
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;
    return (
      <form htmlFor data-testid="search-bar-form">
        <label htmlFor="includes-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="includes-text"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
