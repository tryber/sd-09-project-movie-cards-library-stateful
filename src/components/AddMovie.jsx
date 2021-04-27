// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';
import TextArea from './CreateTextArea';
import CreateInputs from './CreateInputs';
import CreateSelect from './CreateSelect';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title:'',
      imagePath:'',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title,  imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <CreateInputs
          labelText="Título"
          idText="title"
          typeText="text"
          value={ title }
          testid="title-input"
          FuncReive={ this.handleChange }
        />
        <CreateInputs
          labelText="Subtítulo"
          idText="subtitle"
          typeText="text"
          value={ subtitle }
          testid="subtitle-input"
          FuncReive={ this.handleChange }
        />
        <CreateInputs
          labelText="Imagem"
          idText="imagePath"
          typeText="text"
          value={ imagePath }
          testid="image-input"
          FuncReive={ this.handleChange }
        />
        <CreateInputs
          labelText="Avaliação"
          idText="rating"
          typeText="number"
          value={ rating }
          testid="rating-input"
          FuncReive={ this.handleChange }
        />
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <CreateSelect value={ genre } funcRec={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
