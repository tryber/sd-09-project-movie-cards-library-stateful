import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          id="subtitle"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Subtitle;
