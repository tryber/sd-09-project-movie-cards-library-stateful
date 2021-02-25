import React from 'react';
import PropTypes from 'prop-types';

class TitleMovie extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          id="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleMovie.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default TitleMovie;
