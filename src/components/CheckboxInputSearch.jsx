import React from 'react';
import PropTypes from 'prop-types';

class CheckboxInputSearch extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox_control">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="checkbox-input"
          data-testid="checkbox-input"
          htmlFor="checkbox_control"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

export default CheckboxInputSearch;

CheckboxInputSearch.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
}.isRequired;
