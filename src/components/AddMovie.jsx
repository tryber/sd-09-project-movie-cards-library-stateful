// implement AddMovie component here
import React from 'react';

const AddMovie = () => {
  let title; let subtitle; let imagePath;
  let storyline; let rating; let genre;

  return (<div>
    <form data-testid="add-movie-form">
      <label htmlFor="Título" data-testid="title-input-label">
        <input type="text"
          id="Título" value={ title } data-testid="title-input"
          onChange={ title }/>
      </label>
      <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
        <input type="text"
          id="Subtítulo" value={ subtitle } data-testid="subtitle-input"
          onChange={ subtitle }/>
      </label>
      <label htmlFor="Imagem" data-testid="image-input-label">
        <input type="text"
          id="Imagem" value={ imagePath } data-testid="subtitle-input"
          onChange={ imagePath }/>
      </label>
      <label htmlFor="Sinopse" data-testid="storyline-input-label">
        <textarea
          id="Sinopse" value={ storyline } data-testid="storyline-input"
          onChange={ storyline }/>
      </label>
      <label htmlFor="Avaliação" data-testid="rating-input-label">
        <input type="number"
          id="Avaliação" value={ rating } data-testid="subtitle-input"
          onChange={ rating }/>
      </label>
      <label htmlFor="Gênero" data-testid="genre-input-label">
        <select data-testid="select-input"
          id="Gênero" value={ genre } onChange={ genre }>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    </form>
    <button type="button" data-testid="send-button" onClick={ console.log('teste') }>
      Adicionar filme
    </button>
  </div>);
};

export default AddMovie;
