import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubtitleField extends Component {
  render() {
    const { handleChange, subtitle } = this.props;
    return (
      <label htmlFor="input-title" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          onChange={ handleChange }
          value={ subtitle }
          name="subtitle"
        />
      </label>
    );
  }
}

SubtitleField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};
