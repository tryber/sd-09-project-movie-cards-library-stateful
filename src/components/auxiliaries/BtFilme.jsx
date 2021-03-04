import React from 'react';
import PropTypes from 'prop-types';

class BtFilme extends React.Component {
  render() {
    const { onclick } = this.props;
    return (
      <button
        id="btnAdd"
        type="button"
        onClick={ onclick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

BtFilme.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default BtFilme;
