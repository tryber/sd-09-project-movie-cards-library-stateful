import React, { Component } from 'react';

class RatingInput extends Component {
  render() {
    const { value, changeState } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ changeState }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default RatingInput;
