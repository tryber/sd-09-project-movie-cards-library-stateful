import React from 'react';
import PropTypes from 'prop-types';

class SinopseInput extends React.Component {
  render() {
    const { handleOnChange, value } = this.props;
    return (
      <div>
        <label
          data-testid="storyline-input-label"
          htmlFor="storyline"
        >
          Sinopse
          <textarea
            data-testid="storyline-input"
            onChange={ handleOnChange }
            name="storyline"
            value={ value }
          />
        </label>
      </div>
    );
  }
}

SinopseInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SinopseInput;
