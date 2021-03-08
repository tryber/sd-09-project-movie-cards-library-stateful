// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
              id="text-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              id="checkbox-input"
            />
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: [() => ''],
  bookmarkedOnly: false,
  onBookmarkedChange: [() => ''],
};

export default SearchBar;
