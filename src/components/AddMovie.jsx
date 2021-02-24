import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.titleInput = this.titleInput.bind(this);
    this.subtitleInput = this.subtitleInput.bind(this);
    this.imageInput = this.imageInput.bind(this);
    this.storylineInput = this.storylineInput.bind(this);
    this.ratingInput = this.ratingInput.bind(this);
    this.genreSelec = this.genreSelec.bind(this);
    this.createButton = this.createButton.bind(this); 
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  titleInput(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitleInput(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  imageInput(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  storylineInput(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <input
          name="storyline"
          type="textarea"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingInput(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  genreSelec(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  createButton(onClick) {
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.titleInput(title)}
        {this.subtitleInput(subtitle)}
        {this.imageInput(imagePath)}
        {this.storylineInput(storyline)}
        {this.ratingInput(rating)}
        {this.genreSelec(genre)}
        {this.createButton(onClick)}
      </form>
    );
  }
}

export default AddMovie;
