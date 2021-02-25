import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      testId,
      name,
      children,
      id,
      type,
      value,
      onChange,
    } = this.props;

    return (
      <label
        data-testid={ `${testId}-label` }
        htmlFor={ id }
      >
        { children }
        <input
          data-testid={ testId }
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
  testId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
