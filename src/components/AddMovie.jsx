import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createInput = this.createInput.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  handleChange({ target }) {
    const { name, value} = target;
    this.setState({ [name]: value });
  }

  createInput(labelTestId, labelText, inputTestId, inputType, inputName, inputValue) {
    return(
      <label data-testid={ labelTestId } htmlFor={ inputTestId }>
        { labelText }
        <input
          data-testid={ inputTestId }
          id={ inputTestId }
          type={ inputType }
          value={ inputValue }
          name={ inputName}
          onChange={ this.handleChange }
        />
      </label>
    )
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre} = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createInput("title-input-label", "Título", "title-input", "text", "title", title) }
        { this.createInput("subtitle-input-label", "Subtítulo", "subtitle-input", "text", 'subtitle', subtitle) }
        { this.createInput("image-input-label", "Imagem", "image-input", "text", "imagePath", imagePath) }

        <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>
        <textarea data-testid="storyline-input" id="storyline-input" onChange={ this.handleChange } name="storyline" value={ storyline }></textarea>

        { this.createInput("rating-input-label", "Avaliação", "rating-input", "number", "rating", rating) }

        <label data-testid="genre-input-label" htmlFor="genre-input">Gênero</label>
        <select data-testid="genre-input" id="genre-input" onChange={ this.handleChange } name="genre" value={ genre }>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>

        <button data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
