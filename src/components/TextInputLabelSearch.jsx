import React from 'react';
import PropTypes from 'prop-types';

class TextInputLabelSearch extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          data-testid="text-input"
          name="searchText"
          htmlFor="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
          type="text"
        />
      </label>
    );
  }
}

export default TextInputLabelSearch;

TextInputLabelSearch.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}.isRequired;
