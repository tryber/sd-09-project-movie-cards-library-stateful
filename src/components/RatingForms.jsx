import React from 'react';
import PropTypes from 'prop-types';

class RatingForms extends React.Component {
  render() {
    const { rating, stateChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="rating-input"
          value={ rating }
          data-testid="rating-input"
          onChange={ stateChange }
        />
      </label>
    );
  }
}

RatingForms.propTypes = {
  rating: PropTypes.number.isRequired,
  stateChange: PropTypes.func.isRequired,
};

export default RatingForms;
