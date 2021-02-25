import React, { Component } from 'react';

class GenreType extends Component {
  render() {
    const { label, name, value, onChange, test, testLabel, testOption } = this.props
    return (
      <div>
          <label htmlFor={ name } data-testid={ testLabel }>
            { label }
          </label>
          <select
            name={ name }
            id={ name }
            value={ value }
            onChange={ onChange }
            data-testid={ test }
          >
            <option data-testid={testOption} value="">
              Todos
            </option>
            <option data-testid={testOption} value="action">
              Ação
            </option>
            <option data-testid={testOption} value="comedy">
              Comédia
            </option>
            <option data-testid={testOption} value="thriller">
              Suspense
            </option>
          </select>
        </div>
    );
  }
}

export default GenreType;
