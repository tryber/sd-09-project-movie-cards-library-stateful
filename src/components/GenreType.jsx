import React, { Component } from 'react';

class GenreType extends Component {
  render() {
    const { label, name, value, onChange } = this.props
    return (
      <div>
          <label htmlFor={name} data-testid="select-input-label">
            Filtrar por gênero
          </label>
          <select
            name={name}
            id={name}
            value={ value }
            onChange={ onChange }
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </div>
    );
  }
}

export default GenreType;
