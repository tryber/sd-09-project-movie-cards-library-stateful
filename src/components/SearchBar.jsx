// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            checked="bookmarkedOnly"
            data-testid="checkbox-input"
            type="checkbox"
            onChange={ onBookmarkedChange }
          />
        </label>

      </form>);
  }
}
SearchBar.defaultProps = {
  onSearchTextChange: '',
  searchText: '',
  onBookmarkedChange: '',
};

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func,
  searchText: PropTypes.string,
  onBookmarkedChange: '',
};

export default SearchBar;
