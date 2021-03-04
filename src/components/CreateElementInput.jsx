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

Input.propTypes = {
  nameTest: PropTypes.string,
  nameId: PropTypes.string,
  labelName: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOf(['string', 'number']),
  func: PropTypes.func,
};

export default Input;
