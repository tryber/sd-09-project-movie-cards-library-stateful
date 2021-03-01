import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { handleOnChange, value } = this.props;
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle"
        >
          Subtítulo
          <input
            data-testid="subtitle-input"
            onChange={ handleOnChange }
            name="subtitle"
            value={ value }
          />
        </label>
      </div>
    );
  }
}

SubtitleInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SubtitleInput;
