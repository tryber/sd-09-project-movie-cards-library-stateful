import React from 'react';

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

export default Input;
