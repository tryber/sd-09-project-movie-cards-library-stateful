import React from 'react';
import PropTypes from 'prop-types';

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

TextArea.propTypes = {
  value: PropTypes.oneOf(['string', 'number']).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
