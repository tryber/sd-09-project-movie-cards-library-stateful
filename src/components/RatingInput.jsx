import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const {
      value,
      onChange,
    } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
          id="rating"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingInput;
