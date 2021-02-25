import React from 'react';
import PropTypes from 'prop-types';

class SinposeMovie extends React.Component {
  render() {
    const { storyLine, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyLine"
          id="storyline-input"
          cols="30"
          rows="10"
          value={ storyLine }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SinposeMovie.propTypes = {
  storyLine: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SinposeMovie;
