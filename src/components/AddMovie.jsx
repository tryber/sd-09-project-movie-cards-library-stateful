import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            name="title"
            value={this.state.title}
            onChange={this.onClick}
            data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.onClick}
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
