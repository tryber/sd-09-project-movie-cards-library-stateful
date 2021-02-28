import React from 'react';
import PropTypes from 'prop-types';

export default function StorylineInput({ storyline, onChange }) {
  return (
    <label htmlFor="sinopse-input" data-testid="storyline-input-label">
      Sinopse
      <textarea
        value={ storyline }
        onChange={ (ev) => onChange(ev.target.value) }
        id="sinopse-input"
        cols="30"
        rows="10"
        data-testid="storyline-input"
      />
    </label>
  );
}
StorylineInput.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
