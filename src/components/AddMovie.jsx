import React from 'react';
import PropTypes from 'prop-types';
import Title from './Titulo';
import Subtitle from './Subtitulo';
import ImagePath from './ImagePath';
import Rating from './Rating';

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
    this.resetTheState = this.resetTheState.bind(this);
    this.state = initialState;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetTheState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, rating } = this.state;
    // storyline, , genre
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
        {/* <TextArea value={ storyline } onChange={ this.handleChange } /> */}
        <Rating value={ rating } onChange={ this.handleChange } />
        {/* <SelectItem value={ genre } onChange={ this.handleChange } /> */}
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

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
