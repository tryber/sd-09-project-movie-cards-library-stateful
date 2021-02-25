import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const {
      subtitle,
      onChange,
    } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          id="subtitle-input"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string,
  onChange: PropTypes.func,
};

SubtitleInput.defaultProps = {
  subtitle: '',
  onChange: undefined,
};

export default SubtitleInput;
