import React from 'react';
import PropTypes from 'prop-types';

class StoryLineForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="textarea">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          htmlFor="textarea"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default StoryLineForm;

StoryLineForm.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
