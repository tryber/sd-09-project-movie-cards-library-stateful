import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="movieSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="movieSubtitle"
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubtitleInput;
