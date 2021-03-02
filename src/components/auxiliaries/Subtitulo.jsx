import React from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { onValue, change } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitulo">
        Subtítulo
        <input
          id="subtitulo"
          type="text"
          value={ onValue }
          onChange={ change }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  onValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Subtitulo;
