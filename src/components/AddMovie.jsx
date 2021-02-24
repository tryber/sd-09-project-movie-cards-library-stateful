import React, { Component } from 'react';
import { func } from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputTitle = this.inputTitle.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.inputImg = this.inputImg.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  inputTitle(fnCallBack) {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="inputText">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ fnCallBack }
        />
      </label>
    );
  }

  inputSubtitle(fnCallBack) {
    const { imagePath } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="inputText">
        Subtítulo
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ fnCallBack }
        />
      </label>
    );
  }

  inputImg(fnCallBack) {
    const { subtitle } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="inputText">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ fnCallBack }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.inputTitle(this.handleChange) }
        { this.inputSubtitle(this.handleChange) }
        { this.inputImg(this.handleChange) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
