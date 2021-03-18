// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  titleInput() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          id="title"
          name="title"
          value={ title }
          onChange={ this.changeHandler }
        />
      </label>
    );
  }

  subtitleInput() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          onChange={ this.changeHandler }
        />
      </label>
    );
  }

  imageInput() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          id="image"
          name="imagePath"
          value={ imagePath }
          onChange={ this.changeHandler }
        />
      </label>
    );
  }

  render() {
    const { storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <div>
          {this.titleInput()}
          {console.log(storyLine, rating, genre)}
        </div>
        <div>
          {this.subtitleInput()}
        </div>
        <div>
          {this.imageInput()}
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
