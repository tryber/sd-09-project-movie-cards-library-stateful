import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          name="title"
          testLabel="title-input-label"
          testInput="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        >
          Título
        </Input>
        <Input
          testLabel="subtitle-input-label"
          name="subtitle"
          testInput="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        >
          Subtítulo
        </Input>
      </form>
    );
  }
}

AddMovie.propsTypes = {
  title: PropTypes.string.isRequired,
};

export default AddMovie;
