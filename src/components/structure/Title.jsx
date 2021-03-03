import React from 'react';

const Title = ({ value, onChange }) => (
  <label data-testid="title-input-label" htmlFor="title-input">
    Título
    <input
      name="title"
      data-testid="title-input"
      value={ value }
      onChange={ onChange }
    />
  </label>
);

export default Title;
