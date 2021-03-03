import React from 'react';

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

export default Rating;
