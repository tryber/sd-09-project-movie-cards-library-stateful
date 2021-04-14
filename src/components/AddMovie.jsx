// AddMovie
// Esse componente vai renderizar um formulário que permite adicionar um novo cartão;
// Receber como prop onclick - uma callback
// Tem no estado as seguintes propriedades :

// subtitle: '';
// title: '';
// imagePath: '';
// storyline: '';
// rating: 0;
// genre: 'action'.

import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
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
  }

  // Altera o estado do componente
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    // const { title, subtitle, imagePath, rating, genre, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        {/* <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <SelecionaItem value={ genre } onChange={ this.handleChange } /> */}
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

// Valida a prop

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
