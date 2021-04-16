import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    const { title, subtitle, imagePath, storyLine, rating, genre } = this.props;
    this.state = { title, subtitle, imagePath, storyLine, rating, genre };

    this.changeState = this.changeState.bind(this);
    // this.callback = this.callback.bind(this);
    // this.resetState = this.resetState.bind(this);
  }

  changeState({ target: { id, value } }) {
    switch (id) {
    case 'image':
      this.setState({ imagePath: value });
      break;
    case 'send':
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyLine: '',
        rating: 0,
        genre: 'action',
      });
      break;
    default:
      this.setState({ [id]: value });
      break;
    }
  }

  labelTitle(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          id="title"
          type="text"
          value={ title }
          onChange={ this.changeState }
        />
      </label>
    );
  }

  labelSubtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.changeState }
        />
      </label>
    );
  }

  labelImage(image) {
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          data-testid="image-input"
          id="image"
          type="text"
          onChange={ this.changeState }
          value={ image }
        />
      </label>
    );
  }

  lableSinopse(storyLine) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyLine">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="storyLine"
          onChange={ this.changeState }
          value={ storyLine }
        />
      </label>
    );
  }

  lableRating(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating"
          type="number"
          onChange={ this.changeState }
          value={ rating }
        />
      </label>
    );
  }

  lableGenre(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero:&nbsp;
        <select
          data-testid="genre-input"
          id="genre"
          type="number"
          onChange={ this.changeState }
          value={ genre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  buttonSend() {
    return (
      <button
        data-testid="send-button"
        type="button"
        id="send"
        onClick={ (event) => this.changeState(event) }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath: image, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" action="" method="get">
        { this.labelTitle(title) }
        <br />
        { this.labelSubtitle(subtitle) }
        <br />
        { this.labelImage(image) }
        <br />
        { this.lableSinopse(storyLine) }
        <br />
        { this.lableRating(rating) }
        <br />
        { this.lableGenre(genre) }
        <br />
        { this.buttonSend() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
};

AddMovie.defaultProps = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
};

export default AddMovie;
