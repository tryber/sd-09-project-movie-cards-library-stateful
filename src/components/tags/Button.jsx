import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { element } = this.props;

    const {
      data,
      callback,
      text,
      classID,
    } = element;

    return (
      <label htmlFor={ classID }>
        <button
          type="button"
          id={ classID }
          className={ classID }
          data-testid={ data }
          onClick={ callback }
        >
          { text }
        </button>
      </label>
    );
  }
}

Button.propTypes = {
  element: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Button;
