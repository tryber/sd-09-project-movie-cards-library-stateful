import React, { Component } from 'react';

class SelectGenre extends Component {
  render() {

    const { genre, changeState } = this.props;

    return(
      <label htmlFor="gender" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ changeState }
        >
          <option value="" data-testid="genre-option">Todos</option>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectGenre;
