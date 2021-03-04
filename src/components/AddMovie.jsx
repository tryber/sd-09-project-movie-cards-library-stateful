import React from 'react';
import Button from './Button';
import Title from './labels/Title';
import Subtitle from './labels/Subtitle';
import Storyline from './labels/Storyline';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
    this.randomChange = this.randomChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  randomChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addMovie() {
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
        <Title title={ title } randomChange={ this.randomChange } />
        <Subtitle subtitle={ subtitle } randomChange={ this.randomChange } />
        <Imagepath image={ imagePath } randomChange={ this.randomChange } />
        <Storyline storyline={ storyline } randomChange={ this.randomChange } />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            itemID="rating-input"
            onChange={ this.randomChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            itemID="genre-input"
            onChange={ this.randomChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <Button onClick={ this.addMovie } />
      </form>
    );
  }
}

export default AddMovie;
