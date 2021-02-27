// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputTextArea = this.inputTextArea.bind(this);
  }

  inputTextArea(callback) {
    const { searchText } = this.props;
    return (
      <label htmlFor="text-includes" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="text-includes"
          type="text"
          data-testid="text-input"
          name="searchText"
          value={ searchText }
          onChange={ callback }
        />
      </label>
    );
  }

  checkField(callback) {
    const { bookmarkedOnly } = this.props;
    return (
      <label htmlFor="bookmarked-only" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="bookmarked-only"
          data-testid="checkbox-input"
          type="checkbox"
          name="bookmarks"
          checked={ bookmarkedOnly }
          onChange={ callback }
        />
      </label>
    );
  }

  selectForm(callback) {
    const { selectedGenre } = this.props;
    return (
      <label htmlFor="genderfilter" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="genderfilter"
          data-testid="select-input"
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ callback }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form" className="form-structure">
        { this.inputTextArea(onSearchTextChange) }
        { this.checkField(onBookmarkedChange) }
        { this.selectForm(onSelectedGenreChange) }
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
