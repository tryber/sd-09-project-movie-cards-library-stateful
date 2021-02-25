import React from 'react';

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
        <label htmlFor="label-title" data-testid="title-input-label">
          Título
          <input
            name="title"
            id="label-title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.reloadState }
          />
        </label>
        <label htmlFor="label-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            id="label-subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.reloadState }
          />
        </label>
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
        <label htmlFor="textarea-label" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="textarea-label"
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
