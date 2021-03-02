import React from 'react';
import PropTypes from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { onValue, change } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="titulo">
        Título
        <input
          id="titulo"
          type="text"
          value={ onValue }
          onChange={ change }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  onValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Titulo;
