import React from 'react';
import PropTypes from 'prop-types';

class SubtitleMovie extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleMovie.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SubtitleMovie;
