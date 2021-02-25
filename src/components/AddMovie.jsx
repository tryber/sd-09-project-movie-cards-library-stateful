import React from 'react';

export default class AddMovies extends React.Component {
  constructor () {
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
      [name]: value
    });
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">Título
          <input type="text"
              name="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange } /></label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
          <input type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChange } />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">Imagem
          <input type="text"
              name="imagePath"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.handleChange } />
          </label>
          <label htmlFor="text" data-testid="storyline-input-label">Sinopse
          <textarea type="text"
              name="storyline"
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.handleChange } />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">Avaliação
          <input type="number"
              name="rating"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChange } />
          </label>
          <label data-testid="genre-input-label">Gênero
            <select name="genre"
              value={ genre }
              onChange={ this.handleChange }
              data-testid="genre-input">
              <option
                title="action" value="action"
                data-testid="genre-option">Ação</option>
              <option
                title="comedy" value="comedy"
                data-testid="genre-option">Comédia</option>
              <option
                data-testid="genre-option" title="thriller"
                value="thriller">Suspense</option>
            </select>
          </label>
          <div>
            <button data-testid="send-button"
              onClick={ () => { onClick(this.state); } }
            >Adicionar filme</button>
          </div>
        </form>
      </section>
    );
  }
};
