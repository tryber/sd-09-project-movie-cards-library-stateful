import React from 'react';
import PropTypes from 'prop-types';

class InputTextAddMovie extends React.Component {
  render() {
    const { name, id, labelText, onChange, value } = this.props;
    return (
      <label htmlFor={ `${id}-input` } data-testid={ `${id}-input-label` }>
        { labelText }
        <input
          type="text"
          data-testid={ `${id}-input` }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextAddMovie.defaultProps = {
  name: '',
};

InputTextAddMovie.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextAddMovie;
