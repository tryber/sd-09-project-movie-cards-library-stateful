// implement AddMovie component here
import React from 'react';
import Input from './Input';
import Select from './Select';

class AddMovie extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Input
          description="Título"
          type="text"
          value={ title }
          datatestid="title-input"
          datatestidLab="title-input-label"
        />
        <Input
          description="Subtítulo"
          type="text"
          value={ subtitle }
          datatestid="subtitle-input"
          datatestidLab="subtitle-input-label"
        />
        <Input
          description="Imagem"
          type="text"
          value={ imagePath }
          datatestid="image-input"
          datatestidLab="image-input-label"
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
        <Input
          description="Avaliação"
          type="number"
          value={ rating }
          datatestid="rating-input"
          datatestidLab="rating-input-label"
        />
        <Select />
      </form>
    );
  }
}

export default AddMovie;
