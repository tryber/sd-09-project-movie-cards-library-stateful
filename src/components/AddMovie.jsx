import React from 'react';
import PropTypes from 'prop-types';
import HandleInputs from './Inputs/HandleInputs';
import ImageInput from './Inputs/ImageInput';
import SinopseInput from './Inputs/SinopseInput';
import RatingInput from './Inputs/RatingInput';
import './Styles/AddMovie.css';

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

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.setState);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  SelectGenre() {
    return (
      <div>
        <label
          data-testid="genre-input-label"
          htmlFor="input-genre"
        >
          Gênero
          <select
            data-testid="genre-input"
            onChange={ this.handleOnChange }
            id="input-genre"
            name="genre"
            value={ this.value }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.state;
    return (
      <form data-testid="add-movie-form" className="form">
        <HandleInputs
          labelValue="Título"
          dataTestidLabel="title-input-label"
          dataTestidInput="title-input"
          name="title"
          value={ title }
          handleOnChange={ this.handleOnChange }
        />
        <HandleInputs
          labelValue="Subtítulo"
          dataTestidLabel="subtitle-input-label"
          dataTestidInput="subtitle-input"
          name="subtitle"
          value={ subtitle }
          handleOnChange={ this.handleOnChange }
        />
        <ImageInput value={ imagePath } handleOnChange={ this.handleOnChange } />
        <SinopseInput value={ storyline } handleOnChange={ this.handleOnChange } />
        <RatingInput value={ rating } handleOnChange={ this.handleOnChange } />
        { this.SelectGenre(this.genre, this.handleOnChange) }
        <button
          type="button"
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
