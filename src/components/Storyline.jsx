import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { storyline, callback } = this.props;
    return (
      <div>
        <label
          data-testid="storyline-input-label"
          htmlFor="storyline"
        >
          Sinopse
          <textarea
            name="storyline"
            type="text"
            id="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ callback }
          />
        </label>
      </div>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
