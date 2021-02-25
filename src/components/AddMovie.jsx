import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { title } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            id="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleInputChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
