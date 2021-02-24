import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    // this.hendleChenge = this.hendleChenge.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            data-testid="title-input"
            // onChange={}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            // onChange={}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            // onChange={}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <input
            type="textarea"
            data-testid="storyline-input"
            // onChange={}
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
