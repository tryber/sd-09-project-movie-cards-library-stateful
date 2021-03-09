import React from 'react';
import Proptypes from 'prop-types';

class StorylineAdd extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StorylineAdd.propTypes = {
  storyline: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default StorylineAdd;
