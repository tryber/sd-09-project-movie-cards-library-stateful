// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './CreateTextArea';

class AddMovie extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleAdd" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="titleAdd"
            data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subt">
          Subtítulo
          <input
            id="subt"
            data-testid="subtitle-input"
            type="text"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="img">
          Imagem
          <input
            type="text"
            id="img"
            data-testid="image-input"
          />
        </label>
        <TextArea value={ storyline } onChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.PropTypes = {

};

export default AddMovie;
