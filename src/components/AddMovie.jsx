// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

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
    const { name, value } = target;

    this.setState({
      [ name ]: value,
    });
  }
  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="image-input-label" htmlFor="image-input">
            Imagem
            <input
              name="imagePath"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline-input">
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input">
            Avaliação
            <input 
              type="number"
              name="rating"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre-input">
            Gênero
            <select
              name="genre"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChange }
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    )
  }
}

// AddMovie.propTypes = {
//  onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
