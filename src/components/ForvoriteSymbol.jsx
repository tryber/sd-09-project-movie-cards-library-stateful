import React from 'react';
import { func, string } from 'prop-types';

class FavoriteSymbol extends React.Component {
  constructor(props) {
    super(props);
    this.handleSendMovieFavorite = this.handleSendMovieFavorite.bind(this);
  }

  handleSendMovieFavorite() {
    const { handleAddMovieFavorite, title } = this.props;
    handleAddMovieFavorite(title);
  }

  render() {
    const { textButton } = this.props;
    return (
      <button
        type="button"
        className="movie-card-add-favorite"
        onClick={ this.handleSendMovieFavorite }
      >
        { textButton }
        Favorite
      </button>
    );
  }
}

FavoriteSymbol.propTypes = {
  title: string.isRequired,
  handleAddMovieFavorite: func.isRequired,
  textButton: string.isRequired,
};

export default FavoriteSymbol;
