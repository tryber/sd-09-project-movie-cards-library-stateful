import React from 'react';
import Input from './inputComponent';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    const { onClick } = this.props;

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input nameId="title" labelName="Título"
               type="text" value={ title } nameTest="title-input"
               func={ this.handleInputChange } />

        <Input nameId="subtitle" labelName="Subtítulo"
               type="text" value={ subtitle } nameTest="subtitle-input"
               func={ this.handleInputChange } />

        <Input nameId="imagePath" labelName="Imagem"
               type="text" value={ imagePath } nameTest="image-input"
               func={ this.handleInputChange } />

        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleInputChange }
          />
        </label>

        <Input nameId="rating" labelName="Avaliação"
               type="number" value={ rating } nameTest="rating-input"
               func={ this.handleInputChange } />

        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            id="genre"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleInputChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
