import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { func } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ func }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  func: PropTypes.func.isRequired,
}

export default Button;
