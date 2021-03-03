import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchText extends Component {
  render() {
    const {
      onSearchTextChange,
      searchText,
    } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input-label">
        Inclui o texto
        <input
          name="searchText"
          data-testid="text-input"
          id="text-input"
          className="searchText"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchText.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

SearchText.defaultProps = {
  searchText: '',
  onSearchTextChange: null,
};

export default SearchText;
