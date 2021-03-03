import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleInput extends Component {
  render() {
    const {
      title,
      onChange,
    } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          id="title-input"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
};

TitleInput.defaultProps = {
  title: '',
  onChange: undefined,
};

export default TitleInput;
