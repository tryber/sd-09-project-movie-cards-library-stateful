import React from 'react';
import PropTypes from 'prop-types';

class RatingForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating"
      >
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingForm.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingForm;
