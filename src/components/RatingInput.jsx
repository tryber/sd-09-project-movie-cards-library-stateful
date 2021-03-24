import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          htmlFor="rating"
          value={ value }
          type="number"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default RatingInput;

RatingInput.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;
