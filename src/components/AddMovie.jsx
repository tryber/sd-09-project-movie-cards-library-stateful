import React from 'react';
import InputGeneric from './InputGeneric';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.reloadState = this.reloadState.bind(this);
  }

  reloadState(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputGeneric
          value={ title }
          name="title"
          reload={ this.reloadState }
          labelName="Título"
        />
        <InputGeneric
          value={ subtitle }
          name="subtitle"
          reload={ this.reloadState }
          labelName="Subtítulo"
        />
        <label htmlFor="label-imagepath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            id="label-imagepath"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.reloadState }
          />
        </label>
        <label htmlFor="label-textarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="label-textarea"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.reloadState }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
