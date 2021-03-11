import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre,} = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="texto" data-testid="title-input-label">
            Título
            <input
              name="texto"
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange }
              />
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text" value={ subtitle } data-testid="subtitle-input" onChange={ this.handleChange } />
          </label>
          <label data-testid="image-input-label">
            Imagem
            <input
              type="image" value={ imagePath } alt="image" data-testid="image-input" onChange={ this.handleChange } />
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={ storyline } data-testid="storyline-input" onChange={ this.handleChange } />
          </label>
          <label data-testid="rating-input-label">
            Avaliação
            <input
              type="number" value={ rating } data-testid="rating-input" onChange={ this.handleChange } />
          </label>
          <label data-testid="genre-input-label">
            Gênero:
            <select
              name="age"
              defaultValue={ genre } data-testid="genre-input" onChange={ this.handleChange } >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button  type="submit" data-testid="send-button" onClick={this.handleChange }>
            Send it
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;