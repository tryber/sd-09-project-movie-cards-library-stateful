import React from 'react';

class Subtitulo extends React.Component {
  render() {
    return (
      <label
        htmlFor="text-input"
        data-testid="subtitle-input-label"
      >
        Titulo
        <input
          data-testid="subtitle-input"
          type="text"
          value=""
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Subtitulo;
