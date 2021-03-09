import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { title, callback } = this.props;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="inputTitle"
      >
        Título
        <input
          name="title"
          type="text"
          id="inputTitle"
          data-testid="title-input"
          value={ title }
          onChange={ callback }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
