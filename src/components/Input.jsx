import React from 'react';

class Input extends React.Component {
  render() {
    const { label, type, name, value, onChange, test, testLabel } = this.props;
    return (
      <div>
        <label htmlFor={ name } data-testid={ testLabel }>
          { label }
          <input
            type={ type }
            id={ name }
            name= { name }
            value={ value }
            onChange={ onChange }
            data-testid={ test }
          />
        </label>
      </div>
    );
  }
}

export default Input;
