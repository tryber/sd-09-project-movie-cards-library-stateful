import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { element } = this.props;

    const {
      type,
      name,
      text,
      value,
      callback,
      dataLabel,
      dataInput,
      min,
      max,
      step,
      checked,
    } = element;

    return (
      <label
        className={ dataInput }
        htmlFor={ name }
        data-testid={ dataLabel }
      >
        <span>{ text }</span>
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ callback }
          id={ dataInput }
          className={ dataInput }
          data-testid={ dataInput }
          min={ min }
          max={ max }
          step={ step }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  element: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Input;
