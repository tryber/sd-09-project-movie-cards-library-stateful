// implement AddMovie component here

import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

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
    const { name, value } = target
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
                   <input
            name="title"
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
                   <input
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
                   <input
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
                   <textarea
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
                   <input
            name="rating"
            type="number"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }
}

export default AddMovie;
