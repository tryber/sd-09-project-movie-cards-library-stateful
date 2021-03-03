import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { submitForm } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ submitForm }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default Button;
