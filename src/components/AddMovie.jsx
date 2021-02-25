import React from 'react';

export default class AddMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  titleRender = () => (
    <label htmlFor="title" data-testid="title-input-label">
      Título
      <input
        type="text"
        name="title"
        value={ this.state.title }
        data-testid="title-input"
        onChange={ this.handleChange } />
    </label>
  );

  subtitleRender = () => (
    <label htmlFor="subtitle" data-testid="subtitle-input-label">
      Subtítulo
      <input
        type="text"
        name="subtitle"
        value={ this.state.subtitle }
        data-testid="subtitle-input"
        onChange={ this.handleChange } />
    </label>);

  imageRender = () => (
    <label htmlFor="imagePath" data-testid="image-input-label">
      Imagem
      <input
        type="text"
        name="imagePath"
        value={ this.state.imagePath }
        data-testid="image-input"
        onChange={ this.handleChange } />
    </label>
  );

  storylineRender = () => (
    <label
      htmlFor="text"
      data-testid="storyline-input-label">
      Sinopse
      <textarea
        type="text"
        name="storyline"
        value={ this.state.storyline }
        data-testid="storyline-input"
        onChange={ this.handleChange } />
    </label>
  );

  ratingRender = () => (
    <label htmlFor="rating" data-testid="rating-input-label">
      Avaliação
      <input
        type="number"
        name="rating"
        value={ this.state.rating }
        data-testid="rating-input"
        onChange={ this.handleChange } />
    </label>
  );

  genreRender = () => (
    <label
      data-testid="genre-input-label"
    >
      Gênero
      <select
        name="genre"
        value={ this.state.genre }
        onChange={ this.handleChange }
        data-testid="genre-input"
      >
        <option
          title="action"
          value="action"
          data-testid="genre-option"
        >
          Açãos
        </option>
        <option
          title="comedy"
          value="comedy"
          data-testid="genre-option"
        >
          Comédia
        </option>
        <option
          data-testid="genre-option"
          title="thriller"
          value="thriller"
        >
          Suspense
        </option>
      </select>
    </label>
  );

  render() {
    const { onClick } = this.props;
    return (
      <section>
        <form data-testid="add-movie-form">
          { this.titleRender() }
          { this.subtitleRender() }
          { this.imageRender() }
          { this.storylineRender() }
          { this.ratingRender() }
          { this.genreRender() }
          <div>
            <input
              type="button"
              value="Adicionar filme"
              data-testid="send-button"
              onClick={ () => { onClick(this.state); } }
            />
          </div>
        </form>
      </section>
    );
  }
}
