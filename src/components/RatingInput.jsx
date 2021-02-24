import React, { Component } from 'react';

class RatingInput extends Component {
  render() {
    const { rating, changeState } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ changeState }
        />
      </label>
    );
  }
}

export default RatingInput;
