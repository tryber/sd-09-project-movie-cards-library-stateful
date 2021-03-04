import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { onValue, change } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopse">
        Sinopse
        <textarea
          id="sinopse"
          cols=""
          rows=""
          value={ onValue }
          onChange={ change }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  onValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Sinopse;
