import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    this.state = { searchText, bookmarkedOnly, selectedGenre };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { target: { name, value } } = e;
    switch (name) {
    case 'onSearchTextChange':
      this.setState({ searchText: value });
      break;
    case 'checkbox-input':
      this.setState((beforeState) => ({ bookmarkedOnly: !beforeState.bookmarkedOnly }));
      break;
    case 'select-input-label':
      this.setState({ selectedGenre: value });
      break;
    default:
      break;
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div>
          <label data-testid="text-input-label" htmlFor="onSearchTextChange">
            Inclui o texto
            <input
              type="text"
              data-testid="text-input"
              value={ searchText }
              name="onSearchTextChange"
              placeholder="Pesquisar"
              onChange={ (e) => { onSearchTextChange(e); this.handleChange(e); } }
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="test1">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              name="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ (e) => { onBookmarkedChange(); this.handleChange(e); } }
            />
          </label>
          <label data-testid="select-input-label" htmlFor="test2">
            Filtrar por gênero
            <select
              data-testid="select-input"
              htmlFor="test3"
              name="select-input-label"
              value={ selectedGenre }
              onChange={ (e) => { onSelectedGenreChange(); this.handleChange(e); } }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
