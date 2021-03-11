import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends Component {
  render() {
    const { subtitle, callback } = this.props;
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="inputSubtitle"
        >
          Subtítulo
          <input
            name="subtitle"
            type="text"
            id="inputSubitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ callback }
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
