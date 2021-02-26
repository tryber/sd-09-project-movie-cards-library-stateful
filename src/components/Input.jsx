import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { title, changeHandler, subtitle, imagePath, storyline } = this.props;
    return (
      <div className="inputs">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            name="title"
            value={ title }
            onChange={ changeHandler }
          />
        </label>

        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ changeHandler }
          />
        </label>

        <label htmlFor="imagePath" testid="image-input-label">
          Imagem
          <input
            type="text"
            id="imagePath"
            name="imagePath"
            value={ imagePath }
            onChange={ changeHandler }
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline"
              name="storyline"
              value={ storyline }
              onChange={ changeHandler }
            />
          </label>

      </div>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string.IsRequired,
  subtitle: PropTypes.string.IsRequired,
  imagePath: PropTypes.string.IsRequired,
  changeHandler: PropTypes.func.IsRequired,

}.IsRequired;

export default Input;
