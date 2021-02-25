import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import SelectGenre from './SelectGenre';
import ImagePath from './ImagePath';

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
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          text="Título"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          text="Subtítulo"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
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
        <SelectGenre value={ genre } onChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propsTypes = {
  title: PropTypes.string.isRequired,
};

export default AddMovie;
