import React from 'react';
import PropTypes from 'prop-types';

class CreateInputs extends React.Component {
  render() {
    const { labelText, idText, typeText, value, testid, FuncReive } = this.props;
    return (
      <label data-testid={ `${testid}-label` } htmlFor={ idText }>
        { labelText }
        <input
          id={ idText }
          name={ idText }
          type={ typeText}
          value={ value }
          data-testid={ `${testid}` }
          onChange={ FuncReive }
        />
      </label>
    );
  }
}

CreateInputs.propTypes = {
  labelText: PropTypes.string.isRequired,
  idText: PropTypes.string.isRequired,
  typeText: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  value: PropTypes.oneOf(['string', 'number']).isRequired,
  FuncReive: PropTypes.func.isRequired,
};

export default CreateInputs;
