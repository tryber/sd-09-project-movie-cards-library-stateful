import React from 'react';
import { number, func } from 'prop-types';

class RatingMovie extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;

    return (
      <label htmlFor="ratingMovie" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          className="rating-movie"
          data-testid="rating-input"
          name="rating"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingMovie.propTypes = {
  value: number,
  handleChange: func,
};

RatingMovie.defaultProps = {
  value: 0,
  handleChange: () => {},
};

export default RatingMovie;
