// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  render() {
    const { onClick } = this.props;

    const handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            onChange={ handleChange }
          />
        </label>

      </form>
    )
  }
}

export default AddMovie;