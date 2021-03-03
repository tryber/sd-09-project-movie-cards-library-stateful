import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputTextAddMovie';
import inputsData from '../inputsTextForm';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.changeHendler = this.changeHendler.bind(this);
    this.inputRender = this.inputRender.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick() {
    const { props: { onClick } } = this;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeHendler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  inputRender(inputName, inputProps) {
    const { [inputName]: stateName } = this.state;
    return (<InputText
      name={ inputProps.name }
      id={ inputProps.id }
      labelText={ inputProps.labelText }
      onChange={ this.changeHendler }
      value={ stateName }
      key={ inputProps.name }
    />);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { inputsData.map((input) => this.inputRender(input.name, input)) }
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.changeHendler }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.changeHendler }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.changeHendler }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
