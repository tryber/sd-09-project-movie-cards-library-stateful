import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating1 extends Component {
  render() {
    const { handleChange, rating } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Rating1.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rating1;
