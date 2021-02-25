import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          testId="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        >
          Título
        </Input>
        <Input
          testId="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        >
          Subtítulo
        </Input>
        <Input
          testId="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        >
          Imagem
        </Input>
        <TextArea
          name="storyline"
          title="Sinopse"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <Input
          name="rating"
          testId="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        >
          Avaliação
        </Input>
      </form>
    );
  }
}

AddMovie.propsTypes = {
  title: PropTypes.string.isRequired,
};

export default AddMovie;
