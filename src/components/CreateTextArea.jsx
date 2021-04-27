import React from 'react';

class TextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>

    );
  }
}

export default TextArea;
