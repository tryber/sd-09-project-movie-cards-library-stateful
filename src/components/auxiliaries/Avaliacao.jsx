import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { onValue, change } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="avaliacao">
        Avaliação
        <input
          id="avaliacao"
          type="number"
          value={ onValue }
          onChange={ change }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  onValue: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired,
};

export default Avaliacao;
