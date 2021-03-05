import React from 'react';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          id="title"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Title;
