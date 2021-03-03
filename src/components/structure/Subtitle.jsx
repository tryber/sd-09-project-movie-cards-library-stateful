import React from 'react';

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

export default Subtitle;
