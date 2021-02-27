import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { element } = this.props;

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
        htmlFor={ name }
        data-testid={ dataLabel }
      >
        <span>{ text }</span>
        <textarea
          name={ name }
          value={ value }
          onChange={ callback }
          id={ dataInput }
          className={ dataInput }
          data-testid={ dataInput }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  element: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TextArea;
