import React from 'react';
import PropTypes from 'prop-types';

class CreateButton extends React.Component{
  render() {
    const { funcRecive } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ funcRecive }
      >
        Adicionar filme
      </button>
    );
  }
}

CreateButton.propTypes = {
  funcRecive: PropTypes.func.isRequired,
};

export default CreateButton;
