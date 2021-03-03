import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default Rating;
