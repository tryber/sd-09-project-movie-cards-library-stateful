// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        Título
        <label htmlFor="titleAdd" data-testid="title-input-label">
          <input
          type="text"
          id="titleAdd"
          data-testid="title-input"
          />
        </label>
        Subtítulo
        <label data-testid="subtitle-input-label" htmlFor="subt">
          <input
          id="subt"
          data-testid="subtitle-input"
          type="text"
          />
        </label>
        {/\* Treho abaix dando erro... \*/ }
        Imagem
        <label data-testid="image-input-label" htmlFor="img">
          <input
          type="text"
          id="img"
          data-testid="subtitle-input"
          />
        </label>
      </form>
  );
}

}

AddMovie.PropTypes = {

};

export default AddMovie;
