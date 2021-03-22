import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="inputTexto" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          id="inputTexto"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
