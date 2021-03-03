import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, onChange }) => (
  <label data-testid="rating-input-label" htmlFor="rating-input">
    Avaliação
    <input
      type="number"
      name="rating"
      value={ value }
      data-testid="rating-input"
      onChange={ onChange }
    />
  </label>
);

Rating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
