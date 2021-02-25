import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          id="rating"
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputRating;
