import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.clearAllStates = this.clearAllStates.bind(this);

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
    this.setState({
      [name]: value,
    });
  }

  createInputTitle(title) {
    return (
      <label data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          data-testid="title-input"
        />
      </label>
    );
  }

  createInputSubtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={subtitle}
          onChange={this.handleChange}
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  createInputImagepath(imagePath) {
    return (
      <label data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={imagePath}
          onChange={this.handleChange}
          data-testid="image-input"
        />
      </label>
    );
  }

  createTextareaStoryline(storyline) {
    return (
      <label data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={storyline}
          onChange={this.handleChange}
          data-testid="storyline-input"
        />
      </label>
    )
  }

  createInputRating(rating) {
    return (
      <label data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={this.handleChange}
          data-testid="rating-input"
        />
      </label>
    );
  }

  createSelectGenre(genre) {
    return (
      <label data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={genre}
          onChange={this.handleChange}
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  clearAllStates() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, storyline, imagePath, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          {this.createInputTitle(title)}
          {this.createInputSubtitle(subtitle)}
          {this.createInputImagepath(imagePath)}
          {this.createTextareaStoryline(storyline)}
          {this.createInputRating(rating)}
          {this.createSelectGenre(genre)}
          <button
            data-testid="send-button"
            type="button"
            onClick={this.clearAllStates}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}
export default AddMovie;
