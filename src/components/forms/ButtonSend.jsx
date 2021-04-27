import React from 'react';
import { func } from 'prop-types';

class ButtonSend extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        id="send"
        onClick={ () => { handleChange(); } }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonSend.propTypes = { handleChange: func.isRequired };

export default ButtonSend;
