import React from 'react';
import PropTypes from 'prop-types';

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
    this.changeHandler = this.changeHandler.bind(this);
    this.handlerSelectChange = this.handlerSelectChange.bind(this);
    this.handlerSubmitClick = this.handlerSubmitClick.bind(this);
  }

  handlerSelectChange({ target }) {
    const { value } = target;
    this.setState({ genre: value });
  }

  handlerSubmitClick(event) {
    event.preventDefault();
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

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,

    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <div className="add-movie">
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
          </label>
          <input
            type="text"
            id="title-input"
            name="title"
            value={ title }
            onChange={ this.changeHandler }
          />

          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            type="text"
            id="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ this.changeHandler }
          />

          <label htmlFor="imagePath" testid="image-input-label">
            Imagem
          </label>
          <input
            type="text"
            id="imagePath"
            name="imagePath"
            value={ imagePath }
            onChange={ this.changeHandler }
          />

          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea
            id="storyline"
            name="storyline"
            value={ storyline }
            onChange={ this.changeHandler }
          />

          <label htmlFor="imagePath" data-testid="rating-input-label">
            Avaliação
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={ rating }
            onChange={ this.changeHandler }
          />

          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
          </label>
          <select value={ genre } data-testid="genre-input" id="genre"
            onChange={ this.handlerSelectChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>

          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.handlerSubmitClick }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.IsRequired,

}.IsRequired;

export default AddMovie;
