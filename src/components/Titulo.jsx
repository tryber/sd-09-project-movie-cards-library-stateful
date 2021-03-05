import React from 'react';

class Titulo extends React.Component {
  render() {
    return (
      <label
        htmlFor="text-input"
        data-testid="title-input-label"
      >
        Titulo
        <input
          data-testid="title-input"
          type="text"
          value=""
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Titulo;
