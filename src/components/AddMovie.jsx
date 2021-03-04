import React from 'react';
import propTypes from 'prop-types';
import TextInputs from './TextInputs';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
    this.updateState2 = this.updateState.bind(this);
  }

  updateState(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <TextInputs
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          updateState2={ this.updateState2 }
        />
        <form>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.updateState2 }
              name="rating"
              itemID="rating-input"
            />
          </label>
        </form>
      </div>
    );
  }
}
AddMovie.propTypes = {
  subtitle: propTypes.string,
  title: propTypes.string,
  imagePath: propTypes.string,
  storyline: propTypes.string,
  rating: propTypes.number,
  genre: propTypes.string,
}.isRequired;

export default AddMovie;
