import React from 'react';
import { string, func } from 'prop-types';

class LabelImage extends React.Component {
  render() {
    const { image, handleChange } = this.props;
    return (
      <>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          <input
            id="image"
            type="text"
            name="image"
            value={ image }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
        <br />
      </>
    );
  }
}

LabelImage.propTypes = { image: string.isRequired, handleChange: func.isRequired };
export default LabelImage;
