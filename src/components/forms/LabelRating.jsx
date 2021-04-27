import React from 'react';
import { number, func } from 'prop-types';

class LabelRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            id="rating"
            type="number"
            name="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
        <br />
      </>
    );
  }
}

LabelRating.propTypes = { rating: number.isRequired, handleChange: func.isRequired };
export default LabelRating;
