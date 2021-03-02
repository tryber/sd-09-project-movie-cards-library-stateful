import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.inputText = this.inputText.bind(this);
    this.checkBoxChange = this.checkBoxChange.bind(this);
  }

  inputText() {
    const { searchText, onSearchTextChange } = this.props;
    const input = (
      <label data-testid="text-input-label" htmlFor="*">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
    return input;
  }

  checkBoxChange() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const checkBox = (
      <label data-testid="checkbox-input-label" htmlFor="*">
        Mostrar somente favoritos:
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
    return checkBox;
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        { this.inputText() }
        { this.checkBoxChange() }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
