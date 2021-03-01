// implement AddMovie component here
import React from 'react';

const movieState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = movieState;
    this.handleChange = this.handleChange.bind(this);
    this.setNewTitle = this.setNewTitle.bind(this);
    this.setNewSubtitle = this.setNewSubtitle.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target; 
    this.setState({
      [name]: value,
    })
  };

  setNewTitle(title) {
    return (
      <label data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          htmlFor="title-input"
          onChange={ this.handleChange }
          value={ title }>
        </input>
      </label>
    );
  };

  setNewSubtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          htmlFor="subtitle-input"
          onChange={ this.handleChange }
          value={ subtitle }>
        </input>
      </label>
    );
  };

  setNewImagePath(imagePath) {
    return (
      <label data-testid="image-input-label">
        Imagem
        <input
          name="image"
          type="text"
          data-testid="image-input"
          htmlFor="image-input"
          onChange={ this.handleChange }
          value={ image }>
        </input>
      </label>
    );
  };

  setNewStoryline(storyline) {
    return (
      <label data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          type="text"
          data-testid="storyline-input"
          htmlFor="storyline-input"
          onChange={ this.handleChange }
          value={ storyline }>
        </input>
      </label>
    );
  };

  setNewRating(rating) {
    return (
      <label data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          htmlFor="rating-input"
          onChange={ this.handleChange }
          value={ rating }>
        </input>
      </label>
    );
  };

  setNewGenre(genre) {
    return (
      <label data-testid="genre-input-label">
        Gênero
        <input
          name="genre"
          type="select"
          data-testid="genre-input"
          htmlFor="genre-input"
          onChange={ this.handleChange }
          value={ genre }>
          <select>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </input>
      </label>
    );
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
     <form data-testid="add-movie-form">
       { this.setNewTitle(title) }
       { this.setNewSubtitle(subtitle) }
       { this.setNewImagePath(imagePath) }
       { this.setNewStoryline(storyline) }
       { this.setNewRating(rating) }

     </form>
    );
  }
}

export default AddMovie;
