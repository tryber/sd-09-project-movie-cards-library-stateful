import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bookmarked extends Component {
  render() {
    const {
      onBookmarkedChange,
      bookmarkedOnly,
    } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          className="bookmarkedOnly"
          data-testid="checkbox-input"
          id="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

Bookmarked.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};

Bookmarked.defaultProps = {
  bookmarkedOnly: false,
  onBookmarkedChange: null,
};

export default Bookmarked;
