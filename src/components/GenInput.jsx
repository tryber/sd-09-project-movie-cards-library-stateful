import React from 'react';
import PropTypes from 'prop-types';

class GenInput extends React.Component {
  render() {
    const { name, type, dtId, value, onChange, labelId, labelName } = this.props;
    return (
      <label htmlFor={ labelId } data-testid={ labelId }>
        { labelName }
        <input
          name={ name }
          id={ dtId }
          type={ type }
          data-testid={ dtId }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

GenInput.propTypes = ({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dtId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
});

export default GenInput;
