import React from 'react';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import Storyline from './Storyline';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput value={ title } onChange={ this.handleChange } />
          <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
          <ImageInput value={ imagePath } onChange={ this.handleChange } />
          <Storyline value={ storyline } onChange={ this.handleChange } />
          <label htmlFor="rating-input-label" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChange }
              name="rating"
            />
          </label>

          <label htmlFor="genre-input-label" data-testid="genre-input-label">
            Gênero
            <select
              type="text"
              value={ genre }
              data-testid="genre-input"
              onChange={ this.handleChange }
              name="genre"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
