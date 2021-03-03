import React from 'react';
import PropTypes from 'prop-types';

const StoryLine = ({ value, onChange }) => (
  <label data-testid="storyline-input-label" htmlFor="storyline-input">
    Sinopse
    <input
      name="storyLine"
      value={ value }
      data-testid="storyline-input"
      onChange={ onChange }
    />
  </label>
);

StoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StoryLine;
