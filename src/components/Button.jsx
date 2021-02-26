import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.resetTheState = this.resetTheState.bind(this);
  }

  resetTheState() {
    const { onClick, initialState } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ this.resetTheState }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  initialState: PropTypes.objectOf().isRequired,
};

export default Button;
