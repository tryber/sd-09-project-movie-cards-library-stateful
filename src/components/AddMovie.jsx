// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import LabelAndTextarea from './LabelAndTextarea';
import LabelAndSelect from './LabelAndSelect';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeValue(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onclick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form" className="input-container">
          <Label
            title={ title }
            func={ this.changeValue }
            textControl="title"
            textLabel="Título"
          />
          <Label
            title={ subtitle }
            func={ this.changeValue }
            textControl="subtitle"
            textLabel="Subtítulo"
          />
          <Label
            title={ imagePath }
            func={ this.changeValue }
            textControl="image"
            textLabel="Imagem"
          />
          <LabelAndTextarea storyline={ storyline } func={ this.changeValue } />
          <Label
            type="number"
            title={ rating }
            func={ this.changeValue }
            textControl="rating"
            textLabel="Avaliação"
          />
          <LabelAndSelect genre={ genre } func={ this.changeValue } />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ onclick }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.defaultProps = {
  onclick: () => {},
};

AddMovie.propTypes = {
  onclick: PropTypes.func,
};

export default AddMovie;
