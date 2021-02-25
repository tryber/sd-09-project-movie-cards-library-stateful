// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.inputGenerator = this.inputGenerator.bind(this);
    const { onClick } = this.props;
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  inputGenerator(keyName, label, type, valueName) {
    return (
      <label htmlFor={ keyName } data-testid={ `${keyName}-input-label` }>
        {label}
        <input
          type={ type }
          value={ valueName }
          data-testid={ `${keyName}-input` }
          onChange={ this.handleChange }
          name={ keyName }
        />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    console.log(this.inputGenerator('imagePath', 'Imagem', 'text', imagePath));
    return (
      <form data-testid="add-movie-form">
        {this.inputGenerator('title', 'Título', 'text', title)}
        {this.inputGenerator('subtitle', 'Subtítulo', 'text', subtitle)}
        <label htmlFor="imagem" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="Sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>
        {this.inputGenerator('rating', 'Avaliação', 'number', rating)}
        <label htmlFor="Gênero" data-testid="genre-input-label">
          Gênero
          <select value={ genre } data-testid="genre-input" onChange={ this.handleChange }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
