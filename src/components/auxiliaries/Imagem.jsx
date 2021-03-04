import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { onValue, change } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagem">
        Imagem
        <input
          id="imagem"
          type="text"
          value={ onValue }
          onChange={ change }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  onValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Imagem;
