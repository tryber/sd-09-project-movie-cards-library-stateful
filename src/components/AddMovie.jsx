import React from 'react';
import PropTypes from 'prop-types';
import ImageInput from './Inputs/ImageInput';
import SinopseInput from './Inputs/SinopseInput';
import RatingInput from './Inputs/RatingInput';
import TitleInput from './Inputs/TitleInput';
import SubtitleInput from './Inputs/SuttitleInput';
import SelectGenre from './Inputs/SelectRenge';
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

  handleClick() {
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

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="form">
        <TitleInput value={ title } handleOnChange={ this.handleOnChange } />
        <SubtitleInput value={ subtitle } handleOnChange={ this.handleOnChange } />
        <ImageInput value={ imagePath } handleOnChange={ this.handleOnChange } />
        <SinopseInput value={ storyline } handleOnChange={ this.handleOnChange } />
        <RatingInput value={ rating } handleOnChange={ this.handleOnChange } />
        <SelectGenre value={ genre } handleOnChange={ this.handleOnChange } />
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
