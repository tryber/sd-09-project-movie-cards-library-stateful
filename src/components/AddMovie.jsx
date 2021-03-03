import React from 'react';
import Title from './componentsAddMovie/Title';
import Subtitle from './componentsAddMovie/Subtitle';
import Image from './componentsAddMovie/Image';
import Storyline from './componentsAddMovie/Storyline';
import Rating from './componentsAddMovie/Rating';
import Genre from './componentsAddMovie/Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { handleChange } = this;
    // const { insertMovie } = this.props
    // Ideia de componentização em diversos arquivos veio do pull do LucioOSilva
    // Disponível: https://github.com/tryber/sd-09-project-movie-cards-library-stateful/pull/7/files

    return (
      <form data-testid="add-movie-form">
        <Title handleChange={ handleChange } title={ title } />
        <Subtitle handleChange={ handleChange } subtitle={ subtitle } />
        <Image handleChange={ handleChange } image={ imagePath } />
        <Storyline handleChange={ handleChange } storyline={ storyline } />
        <Rating handleChange={ handleChange } rating={ rating } />
        <Genre handleChange={ handleChange } genre={ genre } />
        <button
          type="button"
          data-testid="send-button"
          onClick=""
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
