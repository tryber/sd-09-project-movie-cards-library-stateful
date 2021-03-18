import React from 'react';
import PropTypes from 'prop-types';

class TitleForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          name="title"
          data-testid="title-input"
          htmlFor="title-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleForm.propTypes = {
  handlechange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default TitleForm;
