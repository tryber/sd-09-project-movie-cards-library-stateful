import React, { Component } from 'react';

import InputText from './InputText';

class AddMovie extends Component {
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

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
  }

  handleInputTextChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          label={ 'Título' }
          name={ 'title' }
          value={ title }
          onChange={ this.handleInputTextChange }
          testLabel={ 'title-input-label' }
          test={ 'title-input' }
        />
        <InputText
          label={ 'Subtítulo' }
          name={ 'subtitle' }
          value={ subtitle }
          onChange={ this.handleInputTextChange }
          testLabel={ 'subtitle-input-label' }
          test={ 'subtitle-input' }
        />
        <InputText
          label={ 'Imagem' }
          name={ 'subtitle' }
          value={ subtitle }
          onChange={ this.handleInputTextChange }
          testLabel={ 'image-input-label' }
          test={ 'subtitle-input' }
        />

      </form>
    );
  }
}

export default AddMovie;
