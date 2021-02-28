import React, { Component } from 'react';
import PropType from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Sinopse
        <input
          type="text"
          name="imagePath"
          value={ storyline }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropType.string,
  handleChange: PropType.func,
}.isRequired;

export default Storyline;
