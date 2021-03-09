import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputCheckBox extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="inputCheckBox">
        Mostrar somente favoritos
        <input
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          type="checkbox"
          data-testid="checkbox-input"
          id="inputCheckBox"
        />
      </label>
    );
  }
}

InputCheckBox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
