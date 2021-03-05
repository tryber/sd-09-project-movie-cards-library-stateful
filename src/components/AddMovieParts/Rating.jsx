import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          id="rating"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Rating;



