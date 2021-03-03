import React from 'react';
import PropTypes from 'prop-types';

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

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
