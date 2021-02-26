import React from 'react';

class Input extends React.Component {
  render() {
    const {
      type,
      value,
      datatestid,
      datatestidLab,
      description,
      name,
      onChange,
    } = this.props;
    return (
      <label htmlFor={ datatestid } data-testid={ datatestidLab }>
        { description }
        <input
          type={ type }
          value={ value }
          data-testid={ datatestid }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Input;
