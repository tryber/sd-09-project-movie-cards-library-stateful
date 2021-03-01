import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputBookmarked extends Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <label data-testid="checkbox-input-label" htmlFor="id-bookmark">
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            id="id-bookmark"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
      </div>
    );
  }
}

InputBookmarked.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default InputBookmarked;
