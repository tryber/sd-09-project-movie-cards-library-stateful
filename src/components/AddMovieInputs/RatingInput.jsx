import React from 'react';
import PropTypes from 'prop-types';

export default function RatingInput({ rating, onChange }) {
  return (
    <label htmlFor="rating-input" data-testid="rating-input-label">
      Avaliação
      <input
        value={ rating }
        onChange={ (ev) => onChange(ev.target.value) }
        type="number"
        id="rating-input"
        data-testid="rating-input"
      />
    </label>
  );
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
