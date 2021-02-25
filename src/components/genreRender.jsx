import React from 'react';

export default class genreRender extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label
          htmlFor="select"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            id="select"
            data-testid="select-input"
            value={ value }
            onChange={ onChange }
          >
            <option
              title=""
              value=""
              data-testid="select-option"
            >
              Todos
            </option>
            <option
              title="action"
              value="action"
              data-testid="select-option"
            >
              Ação
            </option>
            <option
              title="comedy"
              value="comedy"
              data-testid="select-option"
            >
              Comédia
            </option>
            <option
              data-testid="select-option"
              title="thriller"
              value="thriller"
            >
              Suspense
            </option>
          </select>
        </label>
      </div>

    );
  }
}