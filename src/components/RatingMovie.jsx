import React from 'react';
import { string, func } from 'prop-types';

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
  value: string,
  handleChange: func,
};

RatingMovie.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default RatingMovie;
