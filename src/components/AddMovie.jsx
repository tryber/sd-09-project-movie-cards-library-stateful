// implement AddMovie component here
import React from 'react'
const AddMovie = () => {
 let obj = { subtitle: '',
  title: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
}
let title
let subtitle
let imagePath
let storyline
let rating
let genre

  return (
  <div>
    <form  data-testid="add-movie-form">
      <label name="Título" data-testid="title-input-label">
        <input name="Título" type='text' value={ title } data-testid="title-input" onChange={ title } ></input>
      </label>
      <label name="Subtítulo" data-testid="subtitle-input-label">
        <input name="Subtítulo" type='text' value={ subtitle } data-testid="subtitle-input" onChange={ subtitle } ></input>
      </label>
      <label name="Imagem" data-testid="image-input-label">
        <input name="Imagem" type='text' value={ imagePath } data-testid="subtitle-input" onChange={ imagePath } ></input>
      </label>
      <label name="Sinopse" data-testid="storyline-input-label">
      <textarea  name="Sinopse" value={ storyline }  data-testid="storyline-input" onChange={ storyline } ></textarea>
      </label>
      <label name="Avaliação" data-testid="rating-input-label">
        <input name="Avaliação" type='number' value={ rating } data-testid="subtitle-input" onChange={ rating } ></input>
      </label>
      <label  name="Gênero" data-testid="genre-input-label">
        <select name="Gênero" data-testid="select-input"  value={ genre } data-testid="genre-input" onChange= { genre }>
          <option value="action" data-testid="genre-option" >Ação</option>
          <option value="comedy" data-testid="genre-option" >Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    </form>
    <button data-testid="send-button" onClick={ console.log('teste') }>Adicionar filme</button>
  </div>
)}

export default AddMovie;