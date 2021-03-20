import React from 'react';
import PropTypes from 'prop-types';

class RatingAddMovie extends React.Component {
  render() {
    const { value, handleFormFieldChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          id="rating"
          type="number"
          value={ value }
          onChange={ handleFormFieldChange }
        />
      </label>
    );
  }
}

RatingAddMovie.propTypes = {
  value: PropTypes.number.isRequired,
  handleFormFieldChange: PropTypes.func.isRequired,
};

export default RatingAddMovie;
