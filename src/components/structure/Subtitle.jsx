import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ value, onChange  }) => (
  <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
    Subtítulo
    <input
      name="subtitle"
      value={ value }
      data-testid="subtitle-input"
      onChange={ onChange }
    />
  </label>
);

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
