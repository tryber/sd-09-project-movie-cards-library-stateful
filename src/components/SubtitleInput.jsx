import React from 'react';
import PropTypes from 'prop-types';

class SubTitleInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="sb-input-label">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          htmlFor="sb-input-label"
          value={ value }
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default SubTitleInput;

SubTitleInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
