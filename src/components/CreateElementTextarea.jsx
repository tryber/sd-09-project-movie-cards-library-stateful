import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.defaultProps = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
