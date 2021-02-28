import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddStoryline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="storyline-input-label"
          htmlFor="id-storyline"
        >
          Sinopse
          <div>
            <textarea
              data-testid="storyline-input"
              name="storyline"
              id="id-storyline"
              value={ storyline }
              onChange={ handleChange }
            />
          </div>
        </label>
      </div>
    );
  }
}

AddStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddStoryline;
