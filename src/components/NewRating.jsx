import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewRating extends Component {
  render() {
    const {
      rating,
      onChange,
    } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          id="rating-input"
          min="0"
          max="5"
          step="0.1"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }
}

NewRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NewRating;
