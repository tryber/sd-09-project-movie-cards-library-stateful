import React from 'react';
import PropTypes from 'prop-types';

class StorylineAddMovie extends React.Component {
  render() {
    const { value, handleFormFieldChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="storyline"
          value={ value }
          onChange={ handleFormFieldChange }
        />
      </label>
    );
  }
}

StorylineAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleFormFieldChange: PropTypes.func.isRequired,
};

export default StorylineAddMovie;
