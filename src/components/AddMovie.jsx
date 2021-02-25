import React, { Component } from 'react';
import { func } from 'prop-types';
import Input from './Input';
import Select from './Select';
import TextArea from './Textarea';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.initialState().form,
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.switchHandler = this.switchHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onClick } = this.props;
    let info = {};
    info = Object.assign(info, this.state);
    delete info.form;
    console.log(this.state);

    onClick(info);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  initialState() {
    return {
      form: [
        { label: 'Título: ',
          name: 'title',
          id: 'title-input',
          tag: 'input',
          type: 'text' },
        { label: 'Subtítulo: ',
          name: 'subtitle',
          id: 'subtitle-input',
          tag: 'input',
          type: 'text' },
        { label: 'Imagem: ',
          name: 'imagePath',
          id: 'image-input',
          tag: 'input',
          type: 'text' },
        { label: 'Sinopse: ',
          name: 'storyline',
          id: 'storyline-input',
          tag: 'textarea' },
        { label: 'Avaliação: ',
          name: 'rating',
          id: 'rating-input',
          tag: 'input',
          type: 'number' },
        { label: 'Gênero: ',
          name: 'genre',
          id: 'genre-input',
          tag: 'select',
          options: {
            action: 'Ação',
            comedy: 'Comédia',
            thriller: 'Suspense',
          } },
      ],
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  switchHandler(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { form } = this.state;

    return (
      <form data-testid="add-movie-form">
        {
          form.map(({ label, name, id, tag, type, options }) => {
            const { [name]: value } = this.state;
            switch (tag) {
            case 'input':
              return (<Input
                key={ name }
                label={ label }
                name={ name }
                id={ id }
                type={ type }
                onInputChange={ this.switchHandler }
                value={ value }
              />);
            case 'textarea':
              return (<TextArea
                key={ name }
                label={ label }
                name={ name }
                id={ id }
                onInputChange={ this.switchHandler }
                value={ value }
              />);
            case 'select':
              return (<Select
                key={ name }
                label={ label }
                name={ name }
                id={ id }
                options={ options }
                onInputChange={ this.switchHandler }
                value={ value }
              />);
            default:
              return '';
            }
          })
        }
        <button type="submit" onClick={ this.handleSubmit } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func,
};

AddMovie.defaultProps = {
  onClick: () => 'This a function for submiting the form.',
};
