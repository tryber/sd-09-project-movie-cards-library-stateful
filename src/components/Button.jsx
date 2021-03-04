import React from 'react';
import propTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}
Button.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Button;
