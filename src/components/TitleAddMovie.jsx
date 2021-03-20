import React from 'react';
import PropTypes from 'prop-types';

class TitleAddMovie extends React.Component {
  render() {
    const { value, handleFormFieldChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          name="title"
          id="title"
          type="text"
          value={ value }
          onChange={ handleFormFieldChange }
        />
      </label>
    );
  }
}

TitleAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleFormFieldChange: PropTypes.func.isRequired,
};

export default TitleAddMovie;
