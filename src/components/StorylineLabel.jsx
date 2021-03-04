import React from 'react';
import PropTypes from 'prop-types';

class StorylineLabel extends React.Component {
  render() {
    const { storyline, changeStateValue } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline"
          data-testid="storyline-input"
          cols="30"
          rows="10"
          onChange={ changeStateValue }
        >
          { storyline }
        </textarea>
      </label>
    );
  }
}

StorylineLabel.propTypes = {
  storyline: PropTypes.string.isRequired,
  changeStateValue: PropTypes.func.isRequired,
};

export default StorylineLabel;
