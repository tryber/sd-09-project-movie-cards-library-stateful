import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingInput extends Component {
  render() {
    const { rating, callback } = this.props;
    return (
      <div>
        <label
          data-testid="rating-input-label"
          htmlFor="inputRating"
        >
          Avaliação
          <input
            name="rating"
            type="number"
            id="inputRating"
            data-testid="rating-input"
            value={ rating }
            onChange={ callback }
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};
