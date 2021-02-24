import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          itemID="imagePath"
          type="text"
          name="imagePath"
          data-testid="image-input"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

const { string, func } = PropTypes;
Image.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default Image;
