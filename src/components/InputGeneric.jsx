import React from 'react';
import PropTypes from 'prop-types';

class InputGeneric extends React.Component {
  render() {
    const { name, value, reload, labelName, type } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { labelName }
        <input
          data-testid={ `${name}-input` }
          id={ name }
          name={ name }
          onChange={ reload }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

InputGeneric.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  reload: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
};

export default InputGeneric;
