import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.inputText = this.inputText.bind(this);
    this.selectFavorite = this.selectFavorite.bind(this);
    this.filterGender = this.filterGender.bind(this);
  }
  inputText() {
    const { searchText, onSearchTextChange} = this.props;
    return (
      <label data-testid="text-input-label" for="text-input">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="text-input"
          />
      </label>
    );
  }

  selectFavorite() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
        <label data-testid="checkbox-input-label" for="favorite-input">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              id="favorite-input"
            />
        </label>
    );
  }

  filterGender() {
    const { selectedGenre, onSelectedGenreChange} = this.props
    return(
      <label data-testid="select-input-label" for="gender-option">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            id="gender-option"
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
      </label>
    )
  }

  render() {
    return(
      <form data-testid="search-bar-form">
        { this.inputText() }
        { this.selectFavorite() }
        { this.filterGender() }
      </form>
    );
  }
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSerchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.number.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;