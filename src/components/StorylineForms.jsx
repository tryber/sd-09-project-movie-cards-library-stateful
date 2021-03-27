import React from 'react';
import PropTypes from 'prop-types';

class StorylineForms extends React.Component {
  render() {
    const { storyline, stateChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          cols="30"
          rows="10"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ stateChange }
        />
      </label>
    );
  }
}

StorylineForms.propTypes = {
  storyline: PropTypes.string.isRequired,
  stateChange: PropTypes.func.isRequired,
};

export default StorylineForms;
