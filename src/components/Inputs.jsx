import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { name, value, testId, labelName, handleChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${testId}-label` }>
        { labelName }
        <input
          name={ name }
          id={ name }
          type="text"
          value={ value }
          data-testid={ testId }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Inputs;
