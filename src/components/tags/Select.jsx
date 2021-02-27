import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { element, children } = this.props;

    const {
      name,
      text,
      value,
      callback,
      dataLabel,
      dataInput,
    } = element;

    return (
      <label
        className={ dataInput }
        htmlFor={ dataInput }
        data-testid={ dataLabel }
      >
        <span>{ text }</span>
        <select
          name={ name }
          value={ value }
          onChange={ callback }
          id={ dataInput }
          className={ dataInput }
          data-testid={ dataInput }
        >
          { children }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  element: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
};

export default Select;
