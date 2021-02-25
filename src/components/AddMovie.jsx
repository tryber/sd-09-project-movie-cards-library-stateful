import React from 'react';

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
    this.retryStateTitle = this.retryStateTitle.bind(this);
  }

  retryStateTitle(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="label-title" data-testid="title-input-label">
          Título
          <input
            name="title"
            id="label-title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.retryStateTitle }
          />
        </label>
        <label htmlFor="label-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            id="label-subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.retryStateTitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
