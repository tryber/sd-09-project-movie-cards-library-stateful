import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { nameTest, nameId, labelName, type, value, func } = this.props;
    return (
      <label data-testid={ `${nameTest}-label` } htmlFor={ nameId }>
        { labelName }
        <input
          id={ nameId }
          name={ nameId }
          type={ type }
          value={ value }
          data-testid={ `${nameTest}` }
          onChange={ func }
        />
      </label>
    );
  }
}

Input.proptypes = {
  nameTest: PropTypes.string.isRequired,
  nameId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOf(['string', 'number']).isRequired,
  "data-testid": PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input;
