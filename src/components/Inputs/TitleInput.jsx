import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { handleOnChange, value } = this.props;
    return (
      <div>
        <label
          data-testid="title-input-label"
          htmlFor="title"
        >
          Título
          <input
            data-testid="title-input"
            onChange={ handleOnChange }
            name="title"
            value={ value }
          />
        </label>
      </div>
    );
  }
}

TitleInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TitleInput;
