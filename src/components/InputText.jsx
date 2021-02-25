import React from 'react';

class InputText extends React.Component {
  render() {
    const { label, name, value, onChange, test, testLabel } = this.props;
    return (
      <div>
        <label htmlFor={ name } data-testid={testLabel}>
          { label }
          <input
            type="text"
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

export default InputText;
