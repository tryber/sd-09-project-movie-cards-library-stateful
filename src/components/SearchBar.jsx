import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.inputText = this.inputText.bind(this);
    this.checkBoxChange = this.checkBoxChange.bind(this);
    this.selectedChange = this.selectedChange.bind(this);
  }

  inputText() {
    const { searchText, onSearchTextChange } = this.props;
    const input = (
      <label data-testid="text-input-label" htmlFor="*">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
    return input;
  }

  // vi essa implementacao no projeto do amigo: pabloiago-movie-cards-library-stateful
  checkBoxChange() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const checkBox = (
      <label data-testid="checkbox-input-label" htmlFor="*">
        Mostrar somente favoritos:
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
    return checkBox;
  }

  selectedChange() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    const selected = (
      <label data-testid="select-input-label" htmlFor="*">
        Filtrar por gênero:
        <select
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
    return selected;
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <fieldset>
          { this.inputText() }
          { this.checkBoxChange() }
          { this.selectedChange() }
        </fieldset>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
