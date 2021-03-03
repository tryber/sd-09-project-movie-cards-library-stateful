import React from 'react';
import PropTypes from 'prop-types';
import Input from './CreateElementInput';
import Select from './CreateElementSelect';
import Button from './CreateButton';
import TextArea from './CreateElementTextarea';

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

    this.filmAdd = this.filmAdd.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  filmAdd() {
    const { onClick } = this.props;
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          nameId="title"
          labelName="Título"
          type="text"
          value={ title }
          nameTest="title-input"
          func={ this.handleInputChange }
        />

        <Input
          nameId="subtitle"
          labelName="Subtítulo"
          type="text"
          value={ subtitle }
          nameTest="subtitle-input"
          func={ this.handleInputChange }
        />

        <Input
          nameId="imagePath"
          labelName="Imagem"
          type="text"
          value={ imagePath }
          nameTest="image-input"
          func={ this.handleInputChange }
        />

        <TextArea value={ storyline } onChange={ this.handleInputChange } />

        <Input
          nameId="rating"
          labelName="Avaliação"
          type="number"
          value={ rating }
          nameTest="rating-input"
          func={ this.handleInputChange }
        />

        <Select value={ genre } func={ this.handleInputChange } />

        <Button func={ this.filmAdd } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
