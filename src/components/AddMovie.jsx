// implement AddMovie component here

import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.titleHandler = this.titleHandler.bind(this);
    this.subtitleHandler = this.subtitleHandler.bind(this);
    this.imagePathHandler = this.imagePathHandler.bind(this);
    this.storylineHandler = this.storylineHandler.bind(this);
    this.ratingHandler = this.ratingHandler.bind(this);
    this.genreHandler = this.genreHandler.bind(this);
    this.newTextInput = this.newTextInput.bind(this);
    this.ratingInput = this.ratingInput.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  titleHandler({ target }) { this.setState({ title: target.value }); }

  subtitleHandler({ target }) { this.setState({ subtitle: target.value }); }

  imagePathHandler({ target }) { this.setState({ imagePath: target.value }); }

  storylineHandler({ target }) { this.setState({ storyline: target.value }); }

  ratingHandler({ target }) { this.setState({ rating: target.value }); }

  genreHandler({ target }) { this.setState({ genre: target.value }); }

  newTextInput(formField, formFieldName, handler, state) {
    return (
      <label data-testid={ `${formField}-input-label` } htmlFor={ `${formField}-input` }>
        { formFieldName }
        <br />
        <input
          data-testid={ `${formField}-input` }
          id={ `${formField}-input` }
          type="text"
          onChange={ handler }
          value={ state }
        />
      </label>
    );
  }

  ratingInput(state) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <br />
        <input
          data-testid="rating-input"
          id="rating-input"
          type="number"
          onChange={ this.ratingHandler }
          value={ state }
          min="0"
          max="5"
          step="0.1"
        />
      </label>
    );
  }

  genreInput(state) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <br />
        <select
          data-testid="genre-input"
          id="genre-input"
          value={ state }
          onChange={ this.genreHandler }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.newTextInput('title', 'Título', this.titleHandler, title) }
        <br />
        { this.newTextInput('subtitle', 'Subtítulo', this.subtitleHandler, subtitle) }
        <br />
        { this.newTextInput('image', 'Imagem', this.imagePathHandler, imagePath) }
        <br />
        { this.newTextInput('storyline', 'Sinopse', this.storylineHandler, storyline) }
        <br />
        { this.ratingInput(rating) }
        <br />
        { this.genreInput(genre) }
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
