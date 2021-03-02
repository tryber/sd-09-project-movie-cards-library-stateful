import React from 'react';
import PropTypes from 'prop-types';

class AddMovieChild extends React.Component {
  render() {
    const { storyline, handleChange, rating, genre, onClickProps } = this.props;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            type="textarea"
            data-testid="storyline-input"
            id="storyline-input"
            value={ storyline }
            name="storyline"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            id="rating-input"
            value={ rating }
            name="rating"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            name="genre"
            onChange={ handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ onClickProps }>
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovieChild.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieChild;
