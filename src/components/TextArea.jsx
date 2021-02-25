import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { title, name, value, onChange } = this.props;
    return (
      <div>
        <label
          data-testid="storyline-input-label"
          htmlFor="textarea"
        >
          {title}
          <textarea
            data-testid="storyline-input"
            id="textarea"
            name={ name }
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
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
