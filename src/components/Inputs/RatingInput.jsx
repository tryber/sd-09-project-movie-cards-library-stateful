import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { handleOnChange, value } = this.props;
    return (
      <div>
        <label
          data-testid="rating-input-label"
          htmlFor="rating"
        >
          Avaliação
          <input
            data-testid="rating-input"
            onChange={ handleOnChange }
            name="rating"
            value={ value }
            type="number"
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default RatingInput;
