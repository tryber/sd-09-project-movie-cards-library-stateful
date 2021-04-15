// AddMovie
// Esse componente vai renderizar um formulário que permite adicionar um novo cartão;
// Receber como prop onclick - uma callback
// Tem no estado as seguintes propriedades :
import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Rating from './Rating';
import SelecionaItem from './SelectItem';
import TextArea from './TextArea';

const initialState = {
  // ESTADO INICIAL
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.resetTheState = this.resetTheState.bind(this);
    this.state = initialState;
  }

  handleChange({ target }) {
    // função que altera o estado do componente
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetTheState() {
    // função que reseta o estado do componente
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    // O INPUT QUE VAI TER O ESTADO ALTERADO
    const { title, subtitle, imagePath, rating, genre, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <SelecionaItem value={ genre } onChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.resetTheState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
// Define o tipo de prop que o onclick recebe
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
