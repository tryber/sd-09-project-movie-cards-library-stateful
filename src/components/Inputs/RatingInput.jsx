import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { handleOnChange, value } = this.props;
    return (
      <div>
        <label
          data-testid="rating-input-label"
          htmlFor="input-storyline"
        >
          Avaliação
          <input
            data-testid="rating-input"
            onChange={ handleOnChange }
            id="input-storyline"
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
  value: PropTypes.string.isRequired,
};

export default RatingInput;
