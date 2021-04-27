import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import Options from './Options';
import Button from './Button';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;

    onClick(this.state);
    const initialState = {

      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Inputs
            value={ title }
            name="title"
            testId="title-input"
            handleChange={ this.handleChange }
            labelName="Título"
          />
          <Inputs
            value={ subtitle }
            name="subtitle"
            testId="subtitle-input"
            handleChange={ this.handleChange }
            labelName="Subtítulo"
          />
          <Inputs
            value={ storyline }
            name="storyline"
            testId="storyline-input"
            handleChange={ this.handleChange }
            labelName="Sinopse"
          />
          <Inputs
            value={ imagePath }
            name="imagePath"
            testId="image-input"
            handleChange={ this.handleChange }
            labelName="Imagem"
          />
          <label htmlFor="id" data-testid="rating-input-label">
            Avaliação
            <input
              name="rating"
              type="number"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChange }
            />
          </label>
          <Button click={ this.handleClick } />
          <Options value={ genre } handleChange={ this.handleChange } />
        </form>
      </div>

    );
  }
}
// AddMovie.defaultProps = {
//   title: PropTypes.object,
//   subtitle: PropTypes.string,
//   storyLine: PropTypes.string,
//   imagePath: PropTypes.string,
//   rating: PropTypes.number,
//   onClick: PropTypes.func,
// };
AddMovie.propTypes = {
  // title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired,
  // storyLine: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
