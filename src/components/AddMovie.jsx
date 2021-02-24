import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
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
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              onChange={ this.handleChange }
              data-testid="title-input"
            />
          </label>
          <label data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              onChange={ this.handleChange }
              data-testid="subtitle-input"
            />
          </label>
          <label data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              onChange={ this.handleChange }
              data-testid="image-input"
            />
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              onChange={this.handleChange}
              data-testid="storyline-input"
            />
          </label>
        </form>
      </div>
    );
  }
}
export default AddMovie;
