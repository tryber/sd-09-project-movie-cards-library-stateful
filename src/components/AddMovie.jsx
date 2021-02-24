// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createInputTextJSX = this.createInputTextJSX.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  createInputTextJSX(labelText, stateKey, stateValue, nameElement) {
    return (
      <label data-testid={ `${stateKey}-input-label` } htmlFor={ `${stateKey}-input` }>
        {labelText}
        <input
          data-testid={ `${stateKey}-input` }
          id={ `${stateKey}-input` }
          type="text"
          name={ nameElement }
          value={ stateValue }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.createInputTextJSX('Título', 'title', title, 'title')}
        {this.createInputTextJSX('Subtítulo', 'subtitle', subtitle, 'subtitle')}
        {this.createInputTextJSX('Imagem', 'image', imagePath, 'imagePath')}
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyLine"
            id="storyline-input"
            cols="30"
            rows="10"
            value={ storyLine }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            id="rating-input"
            type="number"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            id="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.resetState }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
