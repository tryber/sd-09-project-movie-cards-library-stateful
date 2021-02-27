import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, type, name, value, onChangeCallback }) => (
  <input
    type={ type }
    name={ name }
    value={ value }
    onChange={ onChangeCallback }
    data-testid={ `${id}-input` }
  />
);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
};

export default TextInput;
