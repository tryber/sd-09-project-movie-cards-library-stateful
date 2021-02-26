import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="storyLineText" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyLineText"
          type="text"
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StorylineInput;
