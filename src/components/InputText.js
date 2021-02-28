import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        data-testid="text-input-label"
        htmlFor="id-search"
      >
        Inclui o texto:
        <div>
          <input
            data-testid="text-input"
            type="text"
            name="searchText"
            id="id-search"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </div>
      </label>
    );
  }
}

InputText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default InputText;
