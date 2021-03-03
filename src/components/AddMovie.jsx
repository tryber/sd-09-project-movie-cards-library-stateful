import React from 'react';
import InputGeneric from './InputGeneric';
import SelectGenre from './SelectGenre';
import AdicionarFilme from './AdicionarFilme';

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
    this.reloadState = this.reloadState.bind(this);
    this.resetState = this.resetState.bind(this);
    this.imageInput = this.imageInput.bind(this);
  }

  reloadState(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  resetState() {
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  imageInput(valor) {
    return (
      <label htmlFor="label-imagepath" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          id="label-imagepath"
          name="imagePath"
          onChange={ this.reloadState }
          type="text"
          value={ valor }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputGeneric
          labelName="Título"
          name="title"
          reload={ this.reloadState }
          type="text"
          value={ title }
        />
        <InputGeneric
          labelName="Subtítulo"
          name="subtitle"
          reload={ this.reloadState }
          type="text"
          value={ subtitle }
        />
        { this.imageInput(imagePath) }
        <label htmlFor="label-textarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="label-textarea"
            name="storyline"
            onChange={ this.reloadState }
            value={ storyline }
          />
        </label>
        <InputGeneric
          labelName="Avaliação"
          name="rating"
          reload={ this.reloadState }
          type="number"
          value={ rating }
        />
        <SelectGenre genre={ genre } reload={ this.reloadState } />
        <AdicionarFilme onClick={ this.resetState } />
      </form>
    );
  }
}

export default AddMovie;
