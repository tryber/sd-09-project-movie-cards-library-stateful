import React from 'react';
import PropTypes from 'prop-types';

export default function SubtitleInput({ subtitle, onChange }) {
  return (
    <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
      Subtítulo
      <input
        id="subtitle-input"
        value={ subtitle }
        onChange={ (ev) => onChange(ev.target.value) }
        type="text"
        data-testid="subtitle-input"
      />
    </label>
  );
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
