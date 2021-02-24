import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      testLabel,
      name,
      children,
      testInput,
      id,
      type,
      value,
      onChange,
    } = this.props;

    return (
      <label
        data-testid={ testLabel }
        htmlFor={ id }
      >
        { children }
        <input
          data-testid={ testInput }
          name={ name }
          id={ id }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  testLabel: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testInput: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
