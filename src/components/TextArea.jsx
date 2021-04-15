import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    // props que serão usadas
    const { value, onChange } = this.props;
    return (
      <div>
        <label
          data-testid="storyline-input-label"
          htmlFor="textarea"
        >
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            cols="20"
            rows="5"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

// Verifica o tipo da prop que foi passada no início do arquivo
TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
