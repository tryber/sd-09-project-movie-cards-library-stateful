import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryLine extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          itemID="storyline"
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

const { string, func } = PropTypes;
StoryLine.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default StoryLine;
