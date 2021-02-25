import React from 'react';

class TextArea extends React.Component {
  render() {
    const { label, value, name, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ name } data-testid="storyline-input-label">
          { label }
          <textarea
            name={ name }
            id={ name }
            cols="30"
            rows="10"
            onChange={ onChange }
            data-testid="storyline-input"
          >
            { value }
          </textarea>
        </label>
      </div>
    );
  }
}

export default TextArea;
