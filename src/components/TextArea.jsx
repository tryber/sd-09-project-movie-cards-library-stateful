import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
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
            rows="10"
            cols="10"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
