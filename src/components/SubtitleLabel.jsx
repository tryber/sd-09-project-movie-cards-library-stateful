import React from 'react';
import PropTypes from 'prop-types';

class SubtitleLabel extends React.Component {
  render() {
    const { subtitle, changeStateValue } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          id="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ changeStateValue }
        />
      </label>
    );
  }
}

SubtitleLabel.propTypes = {
  subtitle: PropTypes.string.isRequired,
  changeStateValue: PropTypes.func.isRequired,
};

export default SubtitleLabel;
