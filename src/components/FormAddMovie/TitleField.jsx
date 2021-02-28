import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleField extends Component {
  render() {
    const { handleChange, title } = this.props;
    return (
      <label htmlFor="input-title" data-testid="title-input-label">
        Títulos
        <input
          type="text"
          data-testid="title-input"
          onChange={ handleChange }
          value={ title }
          name="title"
        />
      </label>
    );
  }
}

TitleField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
