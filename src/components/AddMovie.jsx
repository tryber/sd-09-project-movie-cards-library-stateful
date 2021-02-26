import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.createInput = this.createInput.bind(this);
    this.createTextArea = this.createTextArea.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick()
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createInput(labelId, inputId, labelText, inputType, inputName, inputValue) {
    return (
      <label data-testid={ labelId } htmlFor={ inputName }>
        { labelText }
        <input
          data-testid={ inputId }
          type={ inputType }
          value={ inputValue }
          name={ inputName }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createTextArea(labelId, inputId, labelText, inputName, inputValue) {
    return (
      <label data-testid={ labelId } htmlFor={ inputName }>
        { labelText }
        <textarea
          data-testid={ inputId }
          value={ inputValue }
          name={ inputName }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createInput('title-input-label', 'title-input', 'Título', 'text', 'title', title) }
        { this.createInput('subtitle-input-label', 'subtitle-input', 'Subtítulo', 'text', 'subtitle', subtitle) }
        { this.createInput('image-input-label', 'image-input', 'Imagem', 'text', 'imagePath', imagePath) }
        { this.createTextArea('storyline-input-label', 'storyline-input', 'Sinopse', 'storyline', storyline) }
        { this.createInput('rating-input-label', 'rating-input', 'Avaliação', 'number', 'rating', rating) }
        <label data-testid="genre-input-label" htmlFor="genre">Gênero
          <select data-testid="genre-input" onChange={ this.handleChange } name="genre" value={ genre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="button" onClick={ this.handleClick }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
