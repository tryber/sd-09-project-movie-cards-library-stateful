import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovieForms extends React.Component {
  render() {
    const { buttonAdd } = this.props;

    return (
      <button
        onClick={ buttonAdd }
        type="button"
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovieForms.propTypes = {
  buttonAdd: PropTypes.func.isRequired,
};

export default ButtonAddMovieForms;
