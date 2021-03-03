import React, { Component } from 'react';
import PropType from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input" htmlFor="storyline-input">
        Sinopse
        <textarea
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input"
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
