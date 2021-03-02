import React from 'react';
import PropTypes from 'prop-types';

class GenericAddMovie extends React.Component {
  render() {
    const { title, subtitle, handleChange } = this.props;
    return (
      <form>
        <label
          htmlFor="titulo"
          data-testid="title-input-label"
        >
          Título
          <input
            name="title"
            type="text"
            id="titulo"
            onChange={ handleChange }
            value={ title }
            data-testid="title-input"
          />
        </label>

        <label
          htmlFor="subtitulo"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            name="subtitle"
            type="text"
            id="subtitulo"
            onChange={ handleChange }
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

GenericAddMovie.propTypes = {
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default GenericAddMovie;
