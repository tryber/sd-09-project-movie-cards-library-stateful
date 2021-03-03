import React from 'react';

class AddMovie extends React.Component {
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
    this.HandleChange = this.HandleChange.bind(this);
    this.CustomInput = this.CustomInput.bind(this);
    this.TextAreaInput = this.TextAreaInput.bind(this);
    this.SelectInput = this.SelectInput.bind(this);
    this.ResetState = this.ResetState.bind(this);
  }

  HandleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  CustomInput(type, name, value, dataTest) {
    return (
      <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        data-testid={ dataTest }
        onChange={ this.HandleChange }
      />
    );
  }

  TextAreaInput(storyline) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          value={ storyline }
          data-testid="storyline-input"
          name="storyline"
          onChange={ this.HandleChange }
        />
      </label>
    );
  }

  SelectInput(genre) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.HandleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
  // ResetState(){
  //   const { onClick } = this.props;
  //   this.setState(StateInitial);
  //   onClick();
  // }

  render() {
    return() {
      const StateInitial = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      }; 
    
    }
  }

}

export default AddMovie;
