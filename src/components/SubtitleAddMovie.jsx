import React from 'react';
import PropTypes from 'prop-types';

class SubtitleAddMovie extends React.Component {
  render() {
    const { value, handleFormFieldChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          id="subtitle"
          type="text"
          value={ value }
          onChange={ handleFormFieldChange }
        />
      </label>
    );
  }
}

SubtitleAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleFormFieldChange: PropTypes.func.isRequired,
};

export default SubtitleAddMovie;
