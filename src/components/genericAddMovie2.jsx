import React from 'react';
import PropTypes from 'prop-types';

class GenericAddMovie extends React.Component {
  render() {
    const { handleChange, storyline, imagePath } = this.props;
    return (
      <form>
        <label
          htmlFor="img"
          data-testid="image-input-label"
        >
          Imagem
          <input
            name="imagePath"
            type="text"
            id="img"
            onChange={ handleChange }
            value={ imagePath }
            data-testid="image-input"
          />
        </label>

        <label
          htmlFor="Sinopse"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            name="storyline"
            id="Sinopse"
            onChange={ handleChange }
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
      </form>
    );
  }
}

GenericAddMovie.propTypes = {
  handleChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default GenericAddMovie;
