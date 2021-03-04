import React from 'react';

class Input extends React.Component {
  render() {
    const { label, type, name, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ name } data-testid={ `${name}-input-label` }>
          { label }
          <input
            type={ type }
            id={ name }
            name= { name }
            value={ value }
            onChange={ onChange }
            data-testid={ `${name}-input` }
          />
        </label>
      </div>
    );
  }
}

export default Input;
