import React from 'react';
import { string, func } from 'prop-types';

class LabelGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero:&nbsp;
          <select
            data-testid="genre-input"
            id="genre"
            name="genre"
            onChange={ handleChange }
            value={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <br />
      </>
    );
  }
}

LabelGenre.propTypes = { genre: string.isRequired, handleChange: func.isRequired };
export default LabelGenre;
