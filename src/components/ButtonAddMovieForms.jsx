import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovieForms extends React.Component {
  render() {
    const { setClick } = this.props;

    return (
      <button
        onClick={ setClick }
        type="button"
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovieForms.propTypes = {
  setClick: PropTypes.func.isRequired,
};

export default ButtonAddMovieForms;
