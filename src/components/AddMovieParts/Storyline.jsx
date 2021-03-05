import React from 'react';

class Storyline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
      Sinopse
      <textarea
        value={ storyline }
        data-testid="storyline-input"
        id="storyline"
        onChange={ handleChange }
      />
    </label>
    );
  }
}

export default Storyline;



