import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { name, value, click } = this.props;
    return (

      <button
        name={ name }
        id="button"
        type="button"
        value={ value }
        data-testid="send-button"
        onClick={ click }
      >
        Adicionar filme
      </button>

    );
  }
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
export default Button;
