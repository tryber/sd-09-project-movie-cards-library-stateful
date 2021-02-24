import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stars extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          itemID="rating"
          type="number"
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

const { number, func } = PropTypes;
Stars.propTypes = {
  value: number.isRequired,
  handleChange: func.isRequired,
};

export default Stars;
