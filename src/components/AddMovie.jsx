import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ this.state.title }
            onChange={ this.onClick }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={ this.state.subtitle }
            onChange={ this.onClick }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ this.state.imagePath }
            onChange={ this.onClick }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            value={ this.state.storyline }
            onChange={ this.onClick }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <textarea
            type="number"
            name="rating"
            value={ this.state.rating }
            onChange={ this.onClick }
            data-testid="rating-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
