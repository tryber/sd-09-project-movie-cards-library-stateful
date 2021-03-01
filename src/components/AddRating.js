import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddRating extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="rating-input-label"
          htmlFor="id-rating"
        >
          Avaliação
          <div>
            <input
              data-testid="rating-input"
              name="rating"
              id="id-rating"
              type="number"
              value={ rating }
              onChange={ handleChange }
            />
          </div>
        </label>
      </div>
    );
  }
}

AddRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddRating;
