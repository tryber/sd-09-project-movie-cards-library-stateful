import React from 'react';
import { func } from 'prop-types';
import '../css/AddMovieCard.css';

class AddMovieCard extends React.Component {
  render() {
    const { handleShowAddMovieForm } = this.props;
    return (
      <div className="add-movie-card">
        <button
          type="button"
          className="symbol-more"
          onClick={ handleShowAddMovieForm }
        >
          +
        </button>
      </div>
    );
  }
}

AddMovieCard.propTypes = {
  handleShowAddMovieForm: func,
};

AddMovieCard.defaultProps = {
  handleShowAddMovieForm: () => {},
};

export default AddMovieCard;
