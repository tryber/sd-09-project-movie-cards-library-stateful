import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.randomChange = this.randomChange.bind(this);
  }

  randomChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            itemID="title-input"
            onChange={ this.randomChange }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            itemID="subtitle-input"
            onChange={ this.randomChange }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            itemID="image-input"
            onChange={ this.randomChange }
          />
        </label>
        <label htmlFor="storyLine-input" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            itemID="storyLine-input"
            onChange={ this.randomChange }
          />
        </label>
        <label htmlFor="" data-testid="rating-input-label">
          Avaliação
          <input
          type="text"
          value={ rating }
          />

        </label>
      </form>
    );
  }
}

export default AddMovie;
