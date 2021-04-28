import React from 'react';

class AddMovie extends React.Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };
  // }

  // handleChange(event) {
  //   this.setState({
  //     title: event.target.value,
  //   });
  // }
  renderTitle() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input id="title-input" type="text" data-testid="title-input" />
      </label>
    );
  }

  renderSubtitle() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input id="subtitle-input" type="text" data-testid="subtitle-input" />
      </label>
    );
  }

  renderImg() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input id="image-input" type="text" data-testid="image-input" />
      </label>
    );
  }

  renderText() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input id="storyline-input" type="text" data-testid="storyline-input" />
      </label>
    );
  }

  render() {
    // const { title } = this.state;
    return (
      <div>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          { this.renderTitle() }
          { this.renderSubtitle() }
          { this.renderImg() }
          { this.renderText() }
        </form>
        {/* <input data-testid="title-input"
              value={ title }
              onChange={ handleChange() }
            >
              Digite o titulo
          </label>
        </form>
         </input> */}
      </div>
    );
  }
}

export default AddMovie;
