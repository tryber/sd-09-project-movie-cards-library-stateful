import React from 'react';

export default class AddMovies extends React.Component {
  constructor () {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  render() {

    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <section>
        <form data-testid="add-movie-form">

          <label htmlFor="title" data-testid="title-input-label">Título
          <input type="text"
              name="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange } />
          </label>

          {/* <label htmlFor="title" data-testid="subtitle-input-label">Subtítulo
          <input type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="title-input"
              onChange="" />
          </label>

          <label htmlFor="title" data-testid="subtitle-input-label">Subtítulo
          <input type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="title-input"
              onChange="" />
          </label>

          <label htmlFor="title" data-testid="subtitle-input-label">Subtítulo
          <input type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="title-input"
              onChange="" />
          </label> */}

        </form>
      </section>
    );
  }
};
