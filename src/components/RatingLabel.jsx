import React from 'react';
import PropTypes from 'prop-types';

class RatingLabel extends React.Component {
  render() {
    const { rating, changeStateValue } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          id="rating"
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ changeStateValue }
        />
      </label>
    );
  }
}

RatingLabel.propTypes = {
  rating: PropTypes.number.isRequired,
  changeStateValue: PropTypes.func.isRequired,
};

export default RatingLabel;
