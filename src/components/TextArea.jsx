import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ id, name, value, onChangeCallback }) => (
  <textarea
    name={ name }
    value={ value }
    onChange={ onChangeCallback }
    data-testid={ `${id}-input` }
  />
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
};

export default TextArea;
