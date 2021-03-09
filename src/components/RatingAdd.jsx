import React from 'react';
import Proptypes from 'prop-types';

class RatingAdd extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingAdd.propTypes = {
  number: Proptypes.number.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default RatingAdd;
