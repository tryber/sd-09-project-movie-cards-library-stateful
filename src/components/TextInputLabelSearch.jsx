import React from 'react';
import PropTypes from 'prop-types';

class TextInputLabelSearch extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="searchtext">
        Inclui o texto:
        <input
          type="text"
          data-testid="text-input"
          id="searchText"
          name="searchText"
          htmlFor="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
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
