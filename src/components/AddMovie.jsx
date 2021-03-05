import React, { Component } from 'react';
import PropType from 'prop-types';

class AddMovie extends Component {
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
    this.changeHandler = this.changeHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  customInput(inputType, label, handler, ...value) {
    const [stateValue, name, testID] = value;
    return (
      <label data-testid={ `${testID || name}-input-label` } htmlFor={ `${name}-input` }>
        { label }
        <input
          data-testid={ `${testID || name}-input` }
          type={ inputType }
          name={ String(name) }
          id={ `${name}-input` }
          value={ stateValue }
          onChange={ handler }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.customInput('text', 'Título', this.changeHandler, title, 'title')}
        {this.customInput('text', 'Subtítulo', this.changeHandler, subtitle, 'subtitle')}
        {this.customInput('text', 'Imagem', this.changeHandler, imagePath, 'imagePath',
          'image')}
        {this.customInput('number', 'Avaliação', this.changeHandler, rating, 'rating')}
        <label data-testid="storyline-input-label" htmlFor="story-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            id="story-input"
            cols="30"
            rows="10"
            value={ storyline }
            onChange={ this.changeHandler }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-select">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            id="genre-select"
            value={ genre }
            onChange={ this.changeHandler }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
