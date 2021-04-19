import React from 'react';
import { func } from 'prop-types';

class ButtonSend extends React.Component {
  constructor(props) {
    super(props);

    const { handleChange, onClick } = this.props;
    this.state = { handleChange, onClick };
  }

  render() {
    const { handleChange, onClick } = this.state;
    return (
      <button
        data-testid="send-button"
        type="button"
        id="send"
        onClick={ (event) => { handleChange(event); onClick(); } }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonSend.propTypes = { handleChange: func.isRequired, onClick: func.isRequired };

export default ButtonSend;
