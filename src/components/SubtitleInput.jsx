import React from 'react';
import propTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ onChange }
          name="subtitle"
        />
      </label>
    );
  }
}
SubtitleInput.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
export default SubtitleInput;
