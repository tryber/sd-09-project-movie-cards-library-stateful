import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      type,
      value,
      datatestid,
      datatestidLab,
      description,
      name,
      onChange,
    } = this.props;
    return (
      <label htmlFor={ datatestid } data-testid={ datatestidLab }>
        { description }
        <input
          type={ type }
          value={ value }
          data-testid={ datatestid }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  datatestid: PropTypes.string,
  datatestidLab: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
