import React from 'react';
import propTypes from 'prop-types';
import TextInputs from './TextInputs';
import Button from './Button';

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
    this.updateState2 = this.updateState.bind(this);
    this.addMovieButton2 = this.addMovieButton.bind(this);
  }

  updateState(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addMovieButton() {
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
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              value={ genre }
              data-testid="genre-input"
              onChange={ this.updateState2 }
              name="genre"
              itemID="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
        <Button addMovieButton2={ this.addMovieButton2 } />
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
