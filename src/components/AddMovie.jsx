import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleChangeTitle(title) {
    this.setState({ title });
  }

  handleChangeSubtitle(subtitle) {
    this.setState({ subtitle });
  }

  handleChangeimagePath(imagePath) {
    this.setState({ imagePath });
  }

  handleChangeStoryline(storyline) {
    this.setState({ storyline });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              id="title-input"
              type="text"
              value={ title }
              onChange={ (ev) => this.handleChangeTitle(ev.target.value) }
              data-testid="title-input"
            />
          </label>

          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="subtitle-input"
              value={ subtitle }
              onChange={ (ev) => this.handleChangeSubtitle(ev.target.value) }
              type="text"
              data-testid="subtitle-input"
            />
          </label>

          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              value={ imagePath }
              onChange={ (ev) => this.handleChangeimagePath(ev.target.value) }
              id="image-input"
              type="text"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="sinopse-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={ storyline }
              onChange={ (ev) => this.handleChangeStoryline(ev.target.value) }
              id="sinopse-input"
              cols="30"
              rows="10"
              data-testid="storyline-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
